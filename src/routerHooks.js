import { useEffect, useState } from 'react';

// Tiny History API router. No dependency needed for four routes.
// Needs a rewrite to index.html on the host (see vercel.json).

const NAV_EVENT = 'app:navigate';
let counter = 0;

const read = () => ({
  path: window.location.pathname,
  hash: window.location.hash,
  key: ++counter,
});

export function navigate(to) {
  window.history.pushState(null, '', to);
  window.dispatchEvent(new Event(NAV_EVENT));
}

export function useLocation() {
  const [loc, setLoc] = useState(read);
  useEffect(() => {
    const update = () => setLoc(read());
    window.addEventListener('popstate', update);
    window.addEventListener(NAV_EVENT, update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener(NAV_EVENT, update);
    };
  }, []);
  return loc;
}

