import { useEffect } from 'react';

// Privacy-friendly, cookieless analytics loader.
// Option A (Plausible): set VITE_PLAUSIBLE_DOMAIN=yourdomain.com in Vercel.
// Option B (Vercel Web Analytics): enable in Vercel dashboard and set VITE_VERCEL_ANALYTICS=true.
// Does nothing in local dev or when neither variable is configured.
const Analytics = () => {
  useEffect(() => {
    if (!import.meta.env.PROD) return undefined;

    const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    const useVercel = import.meta.env.VITE_VERCEL_ANALYTICS === 'true';

    let script = null;
    if (plausibleDomain) {
      script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = plausibleDomain;
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    } else if (useVercel) {
      script = document.createElement('script');
      script.defer = true;
      script.src = '/_vercel/insights/script.js';
      document.head.appendChild(script);
    }

    return () => {
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return null;
};

export default Analytics;
