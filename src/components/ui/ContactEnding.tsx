import { motion } from 'framer-motion';

export const ContactEnding = () => {
  return (
    <section id="footer" className="w-full min-h-screen bg-light text-primary relative z-20 flex flex-col justify-between py-24 px-6 lg:px-24 border-t border-black/5">
      
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col justify-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] mb-12"
        >
          Have an <span className="text-[#3F2B73]">idea?</span> <br/>
          <span className="text-gray-400">Let's build it.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a href="mailto:adhilharis369@gmail.com?subject=Hiring%20Inquiry" className="bg-black text-white px-8 py-5 rounded-full text-base font-medium hover:bg-gray-800 transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-black/10">
            Hire Me
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="https://wa.me/971508861554?text=Hi%20Adhil,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project." target="_blank" rel="noopener noreferrer" className="bg-white/40 backdrop-blur-md text-black border border-black/10 px-8 py-5 rounded-full text-base font-medium hover:bg-white/80 transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-black/5">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/adhilharis/" target="_blank" rel="noopener noreferrer" className="bg-white/40 backdrop-blur-md text-black border border-black/10 px-8 py-5 rounded-full text-sm font-medium hover:bg-white/80 transition-all text-center flex items-center justify-center">
            Connect on LinkedIn
          </a>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-[1600px] mx-auto mt-24 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500 border-t border-black/10 pt-8"
      >
        <p>Adhil Haris &mdash; Frontend Developer building scalable web and mobile experiences.</p>
        <div className="flex gap-6 mt-4 md:mt-0 items-center">
          <a href="#" className="hover:text-black transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/adhilharis/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="https://x.com/aadhy_l?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Twitter</a>
          <a href="https://wa.me/971508861554?text=Hi%20Adhil,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project." target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            WhatsApp
          </a>
        </div>
      </motion.div>

    </section>
  );
};
