import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';
import { Link } from 'react-router-dom';

export const Section08Closing = () => {
  return (
    <section id="footer" className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Building digital products that are clean, scalable, and user-focused.
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-6"
      >
        <MagneticButton>
          <Link to="/" className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-black transition-colors shadow-lg">
            View Projects
          </Link>
        </MagneticButton>
        <MagneticButton>
          <a href="mailto:adhilharis369@gmail.com?subject=Hiring%20Inquiry" className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors">
            Hire Me
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href="https://wa.me/971508861554?text=Hi%20Adhil,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors gap-2">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  );
};
