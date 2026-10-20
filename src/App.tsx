import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return <div className="site-frame"><a className="skip-link" href="#main-content">Skip to content</a><Header /><div id="main-content"><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /></Routes></div></div>;
}
export default App;
