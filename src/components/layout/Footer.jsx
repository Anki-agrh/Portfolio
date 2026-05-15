import { socials } from '../../data/socials';
import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const colorMap = {
  rose: 'bg-accent-rose-soft text-accent-rose border-accent-rose',
  lavender: 'bg-[rgba(213,192,232,0.3)] text-accent-lavender-vivid border-accent-lavender',
  sage: 'bg-accent-sage text-accent-sage-vivid border-accent-sage-vivid',
};

const iconComponents = {
  email: <Mail className="w-5 h-5" />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />
};

const Footer = () => (
  <footer id="contact" className="section max-w-[1000px] mx-auto px-6 py-20 text-center">
    <span className="font-hand text-xl text-accent-rose block mb-1">let's connect! ♥</span>
    <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold text-accent-plum mb-10">Get In Touch</h2>

    <p className="text-lg text-text-secondary max-w-md mx-auto mb-8">
      I'd love to hear from you! Whether it's about a project, an opportunity, or just chai & tech talk, drop me a hiii ✨
    </p>

    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {socials.map(s => (
        <a key={s.id} href={s.href} target={s.id === 'email' ? undefined : '_blank'} rel="noopener noreferrer"
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold border-[1.5px]
          shadow-glass transition-all duration-300 hover:-translate-y-1 hover:rotate-[-2deg] hover:shadow-glass-hover ${colorMap[s.color]}`}>
          <span className="text-xl flex items-center justify-center">{iconComponents[s.id] || s.icon}</span>
          <span>{s.label}</span>
        </a>
      ))}
    </div>

    <div className="border-t-2 border-dashed border-accent-lavender pt-6">
      <p className="font-hand text-xl text-text-muted">crafted with ♥ by ankita · © 2025</p>
      <div className="flex justify-center gap-4 mt-2 text-lg opacity-40">
        {['✿','♥','✦','☆','❀'].map((d,i) => (
          <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{d}</span>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
