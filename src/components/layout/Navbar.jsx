import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [active, setActive] = useState('hero');
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 200);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  useEffect(() => {
    const secs = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });
    secs.forEach(s => obs.observe(s));
    return () => secs.forEach(s => obs.unobserve(s));
  }, []);

  const links = ['about', 'education', 'experience', 'certifications', 'projects', 'skills', 'contact'];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[800px]
      bg-bg-secondary/90 backdrop-blur-2xl border border-text-muted/30
      rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300
      ${hidden ? '-translate-y-[150%]' : ''}`}>
      <div className="flex items-center justify-between gap-2">
        <a href="#hero" className="font-hand text-2xl font-bold text-accent-plum whitespace-nowrap">
          ankita ✿
        </a>

        <div className="hidden md:flex gap-1">
          {links.map(l => (
            <a key={l} href={`#${l}`}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors
              ${active === l ? 'bg-accent-rose-soft text-accent-rose' : 'text-text-secondary hover:bg-accent-rose-soft hover:text-accent-rose'}`}>
              {l}
            </a>
          ))}
        </div>

        <button onClick={toggleTheme} aria-label="Toggle theme"
          className={`relative w-14 h-7 rounded-full flex-shrink-0 transition-all duration-400
          ${isDark ? 'bg-gradient-to-br from-[#2D1B69] to-[#0D1B2A]' : 'bg-gradient-to-br from-[#F0D060] to-[#E8919C]'}`}>
          <Sun className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'}`} />
          <Moon className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'}`} />
          <span className={`absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full shadow-md transition-transform duration-500
            ${isDark ? 'translate-x-7 bg-[#E8D5F5]' : 'bg-white'}`} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
