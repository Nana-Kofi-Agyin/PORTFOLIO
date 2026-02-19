import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0b0b1a] px-[5%] sm:px-[7%] md:px-[9%] py-8 sm:py-10 md:py-12 border-t border-white/[0.04]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
        <p className="text-[1.3rem] sm:text-[1.4rem] text-gray-400 text-center sm:text-left">
          © 2026 <span className="text-indigo-400 font-[600]">Dex</span>. Crafted with passion.
        </p>
        <div className="flex gap-3 sm:gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center min-w-[44px] min-h-[44px] w-[4rem] h-[4rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1 active:scale-95"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center min-w-[44px] min-h-[44px] w-[4rem] h-[4rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1 active:scale-95"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center min-w-[44px] min-h-[44px] w-[4rem] h-[4rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1 active:scale-95"
            aria-label="Twitter"
          >
            <FiTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
