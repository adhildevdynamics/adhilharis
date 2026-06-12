import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';
import { Link } from 'react-router-dom';

export const Section08Closing = () => {
  return (
    <section id="footer" className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 md:py-12 border-t border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="group relative flex flex-col items-center text-center p-12 md:p-24 bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_12px_48px_rgba(0,0,0,0.04)] rounded-[3rem] overflow-hidden hover:bg-white/50 hover:shadow-[0_20px_60px_rgba(63,43,115,0.06)] transition-all duration-700"
      >
        {/* Decorative Inner Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-white/80 to-transparent blur-[60px] pointer-events-none z-0" />
        
        {/* Liquid Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-gray-900 via-[#3F2B73] to-indigo-950 bg-clip-text text-transparent">
            Building digital products that are clean, scalable, and user-focused.
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link to="/">
            <MagneticButton className="!bg-[#3F2B73]/80 hover:!bg-[#3F2B73] !border-white/40 !text-white !px-8 !py-4 shadow-lg shadow-[#3F2B73]/15">
              View Projects
            </MagneticButton>
          </Link>
          <a href="mailto:adhilharis369@gmail.com?subject=Hiring%20Inquiry">
            <MagneticButton className="!bg-white/60 hover:!bg-white/80 !border-white/80 backdrop-blur-md !text-[#3F2B73] !px-8 !py-4 shadow-lg shadow-black/5">
              Hire Me
            </MagneticButton>
          </a>
          <a href="https://wa.me/971508861554?text=Hi%20Adhil,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project." target="_blank" rel="noopener noreferrer">
            <MagneticButton className="!bg-white/60 hover:!bg-white/80 !border-white/80 backdrop-blur-md !text-gray-800 !px-8 !py-4 shadow-lg shadow-black/5">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 shrink-0 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>WhatsApp</span>
              </div>
            </MagneticButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
