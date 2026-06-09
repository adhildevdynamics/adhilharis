import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CodeToProduct = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for this entire 400vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Opacity transitions for each of the 4 visual states
  const state1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const state2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const state3Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const state4Opacity = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);

  // Subtle scaling for entrance/exit effects
  const state1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  const state2Scale = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [1.1, 1, 1, 0.9]);
  const state3Scale = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [1.1, 1, 1, 0.9]);
  const state4Scale = useTransform(scrollYProgress, [0.7, 0.75, 1], [1.1, 1, 1]);

  return (
    <section ref={containerRef} className="relative bg-light border-t border-black/5 z-20">
      
      {/* Main Container */}
      <div className="w-full flex flex-col md:flex-row max-w-[1600px] mx-auto px-6 lg:px-24 relative">
        
        {/* Left Side: Sticky Transforming Visuals */}
        <div className="w-full md:w-1/2 h-[45vh] md:h-screen sticky top-[72px] md:top-0 bg-light z-10 md:z-auto border-b border-black/5 md:border-b-0 flex items-center justify-center overflow-hidden">
          
          {/* State 1: Code */}
          <motion.div style={{ opacity: state1Opacity, scale: state1Scale, zIndex: state1Opacity }} className="absolute w-full max-w-[400px] flex items-center justify-center">
            <div className="w-full glass rounded-2xl p-6 shadow-2xl border border-black/10 bg-white/80">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <pre className="font-mono text-sm md:text-base leading-relaxed text-gray-800">
                <span className="text-[#3F2B73]">const</span> App = () =&gt; {'{\n'}
                {'  '}<span className="text-[#3F2B73]">return</span> {'<\n'}
                {'    '}<span className="text-blue-500 font-bold">Dashboard</span> {'\n'}
                {'      '}user={'{\n'}
                {'        '}role: <span className="text-green-600">"admin"</span>\n
                {'      }\n'}
                {'    />\n'}
                {'}'};
              </pre>
            </div>
          </motion.div>

          {/* State 2: Component Tree */}
          <motion.div style={{ opacity: state2Opacity, scale: state2Scale, zIndex: state2Opacity }} className="absolute w-full max-w-[400px] flex flex-col items-center justify-center gap-8">
            <div className="px-8 py-4 rounded-xl bg-black text-white font-mono text-base shadow-xl z-10 border border-gray-800">App</div>
            
            {/* Connecting lines */}
            <div className="absolute top-[52px] w-[2px] h-12 bg-gray-300 z-0"></div>
            <div className="absolute top-[100px] w-64 h-[2px] bg-gray-300 z-0"></div>
            
            <div className="flex gap-24 z-10 pt-4">
              <div className="flex flex-col items-center relative">
                <div className="absolute -top-5 w-[2px] h-5 bg-gray-300 z-0"></div>
                <div className="px-6 py-3 rounded-lg bg-white border border-gray-200 font-mono text-sm shadow-lg text-black">Sidebar</div>
              </div>
              <div className="flex flex-col items-center relative">
                <div className="absolute -top-5 w-[2px] h-5 bg-gray-300 z-0"></div>
                <div className="px-6 py-3 rounded-lg bg-blue-500 text-white font-mono text-sm shadow-lg">Dashboard</div>
                
                <div className="w-[2px] h-8 bg-gray-300 z-0"></div>
                <div className="px-4 py-2 rounded-lg bg-white border border-gray-200 font-mono text-xs shadow-lg text-gray-500">ChartWidget</div>
              </div>
            </div>
          </motion.div>

          {/* State 3: UI Wireframe */}
          <motion.div style={{ opacity: state3Opacity, scale: state3Scale, zIndex: state3Opacity }} className="absolute w-full max-w-[150px] md:max-w-[320px] flex items-center justify-center">
            <div className="w-full aspect-[1/2] border-[6px] border-gray-200 rounded-[3rem] p-5 bg-white flex flex-col gap-5 shadow-2xl relative overflow-hidden">
              <div className="w-24 h-6 bg-gray-200 rounded-full mx-auto mb-2"></div>
              
              <div className="w-full h-40 bg-gray-100 rounded-2xl animate-pulse"></div>
              
              <div className="flex gap-3">
                <div className="flex-1 h-24 bg-gray-100 rounded-2xl animate-pulse"></div>
                <div className="flex-1 h-24 bg-gray-100 rounded-2xl animate-pulse"></div>
              </div>
              
              <div className="w-full flex-1 bg-gray-100 rounded-2xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* State 4: Finished Product */}
          <motion.div style={{ opacity: state4Opacity, scale: state4Scale, zIndex: state4Opacity }} className="absolute w-full max-w-[600px] flex items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
              {/* Mobile App */}
              <img 
                src="/react_native_login.png" 
                alt="Finished Mobile App" 
                className="w-[35%] md:w-[40%] h-auto rounded-[1rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 md:border-4 border-white absolute -left-2 md:-left-12 -rotate-6 translate-y-4 md:translate-y-8 z-10" 
              />
              {/* Dashboard */}
              <img 
                src="/react_ticketing_dashboard.png" 
                alt="Live Dashboard" 
                className="w-[65%] md:w-[80%] h-auto rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 rotate-2 -translate-y-2 md:-translate-y-4 z-0 translate-x-4 md:translate-x-12" 
              />
            </div>
          </motion.div>

        </div>

        {/* Right Side: Scrolling Text Blocks */}
        <div className="w-full md:w-1/2 flex flex-col justify-start relative px-4 md:px-12 z-0 md:z-20 pt-0 pb-[10vh] md:py-[20vh]">
          
          <div className="h-[60vh] flex flex-col justify-center gap-6">
            <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">01 / Developer</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.1]">
              Writing clean, robust code.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-md">
              It all starts with logic. Writing scalable components, managing state efficiently, and ensuring the codebase is built to last.
            </p>
          </div>

          <div className="h-[60vh] flex flex-col justify-center gap-6">
            <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">02 / Code</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.1]">
              Structuring the component tree.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-md">
              Breaking down complex UIs into modular, reusable components. This guarantees a maintainable and flexible frontend infrastructure.
            </p>
          </div>

          <div className="h-[60vh] flex flex-col justify-center gap-6">
            <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">03 / Interface</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.1]">
              Mapping out the experience.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-md">
              Translating logic into layouts. Wireframing the user flows to ensure everything sits perfectly before adding the final polish.
            </p>
          </div>

          <div className="h-[60vh] flex flex-col justify-center gap-6">
            <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">04 / Product</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.1]">
              Delivering the final product.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-md">
              The end result is a highly polished, performant, and dynamic digital experience that users love to interact with.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
