// Vercel serverless function: POST /api/contact
// Sends the message through EmailJS using server-side keys, so no key is
// exposed in the browser.
//
// Spam and abuse protection, in order:
//   1. Same-origin check
//   2. Honeypot field and minimum fill time (bots get a silent fake success)
//   3. Per-IP rate limit
//   4. Server-side validation (same rules as the form)
//
// Rate limit caveat: the counter lives in memory, so it is per server
// instance and resets on cold starts. It stops casual abuse. For a hard
// limit, back it with Upstash Redis or Vercel KV.

import { validateContact } from '../src/lib/contactValidation.js';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;
const MIN_FILL_MS = 2000;
const hits = new Map();

function retryAfterSeconds(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return Math.ceil((WINDOW_MS - (now - recent[0])) / 1000);
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return 0;
}

const clientIp = (req) =>
  String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
  req.headers['x-real-ip'] ||
  'unknown';

function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // non-browser clients are still rate limited
  try {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }
  if (!sameOrigin(req)) return res.status(403).json({ ok: false, error: 'Request blocked.' });
  if (!String(req.headers['content-type'] || '').includes('application/json')) {
    return res.status(415).json({ ok: false, error: 'Unsupported request.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};

  // Bots: pretend it worked so they do not adapt.
  if (body.website || (typeof body.elapsed === 'number' && body.elapsed < MIN_FILL_MS)) {
    return res.status(200).json({ ok: true });
  }

  const wait = retryAfterSeconds(clientIp(req));
  if (wait > 0) {
    res.setHeader('Retry-After', String(wait));
    return res.status(429).json({
      ok: false,
      error: `Too many messages. Please try again in ${Math.ceil(wait / 60)} minute(s), or email me directly.`,
    });
  }

  const { values, errors, ok } = validateContact(body);
  if (!ok) return res.status(422).json({ ok: false, errors });

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } = process.env;
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    return res.status(503).json({ ok: false, error: 'The form is not set up yet. Please email me directly.' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: values.name,
          from_email: values.email,
          reply_to: values.email,
          subject: values.subject,
          message: values.message,
        },
      }),
    });
    if (!response.ok) throw new Error(`EmailJS responded ${response.status}`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact send failed:', err.message); // never log message contents
    return res.status(502).json({ ok: false, error: 'Could not send your message. Please email me directly.' });
  }
}
