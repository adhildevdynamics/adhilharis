import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageTransition } from './components/ui/PageTransition';
import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/ui/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll>
      <div className="w-full min-h-screen bg-light text-primary font-sans relative selection:bg-black selection:text-white">
        <PageTransition />
        <CustomCursor />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </SmoothScroll>
  );
}

export default App;
