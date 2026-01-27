import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f23] px-[9%] py-12 border-t border-white/5">
      <div className="flex justify-between items-center flex-wrap gap-8">
        <p className="text-[1.4rem] text-gray-400">
          © 2026 <span className="text-indigo-400 font-[600]">Dex</span>. Crafted with passion.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1"
          >
            <FiTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
