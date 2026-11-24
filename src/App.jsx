import { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Analytics from './components/Analytics';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import CaseStudy from './pages/CaseStudy';
import Cv from './pages/Cv';
import NotFound from './pages/NotFound';
import { useLocation } from './routerHooks';

const HOME_TITLE = 'Nana Kofi Agyin | Full-stack developer in Accra';

function Page({ path }) {
  const clean = path.replace(/\/+$/, '') || '/';
  if (clean === '/') return <Home />;
  if (clean === '/projects') return <AllProjects />;
  if (clean === '/cv') return <Cv />;
  const m = clean.match(/^\/projects\/([\w-]+)$/);
  if (m) return <CaseStudy slug={m[1]} />;
  return <NotFound />;
}

function App() {
  const loc = useLocation();
  const first = useRef(true);
  const lastPath = useRef(loc.path);

  // Scroll and focus handling for client-side navigation.
  useEffect(() => {
    const pathChanged = lastPath.current !== loc.path;
    lastPath.current = loc.path;
    if (loc.path === '/' && pathChanged) document.title = HOME_TITLE;

    if (loc.hash) {
      const el = document.getElementById(loc.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        return;
      }
    }
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    const h1 = document.querySelector('main h1');
    if (h1) {
      h1.setAttribute('tabindex', '-1');
      h1.focus({ preventScroll: true });
    }
  }, [loc.key, loc.path, loc.hash]);

  return (
    <>
      <Analytics />
      <a href="#main" className="skip-link no-print">Skip to main content</a>
      <Header />
      <main id="main">
        <Page path={loc.path} />
      </main>
      <Footer />
    </>
  );
}

export default App;
