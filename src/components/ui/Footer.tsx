export const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-accent-dark text-cream border-t border-black/20 py-8 px-6 lg:px-12 relative z-20">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-cream/80">
        <p>Adhil Haris &mdash; Frontend Developer building scalable web and mobile experiences.</p>
        <nav className="flex gap-6 items-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/adhilharis/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">LinkedIn</a>
          <a href="https://x.com/aadhy_l?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Twitter</a>
          <a href="https://wa.me/971508861554?text=Hi%20Adhil,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project." target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">WhatsApp</a>
        </nav>
        <span className="text-cream/60">&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
