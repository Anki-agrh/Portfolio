import { projects } from '../../data/projects';
import RevealOnScroll from '../animations/RevealOnScroll';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const Projects = () => (
  <section id="projects" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-text-muted/20">
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
      
      {/* Title */}
      <div>
        <h2 className="uppercase tracking-[0.2em] text-sm font-semibold text-text-primary mb-2">Projects</h2>
        <div className="w-8 h-[1px] bg-text-primary"></div>
      </div>

      {/* Content */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <RevealOnScroll key={p.id}>
          <div className="group relative h-full flex flex-col rounded-[1.25rem] bg-[#0a0a0a] border border-gray-800 shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">

            {/* Glowing ambient background effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lavender/10 via-transparent to-accent-rose/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Browser Window Header */}
            <div className="bg-[#1a1a1a] border-b border-gray-800 px-3 py-2 flex items-center gap-2 relative z-10">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="mx-auto bg-black/40 text-gray-500 text-[9px] px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5 border border-gray-800/50">
                <div className="w-1 h-1 rounded-full bg-accent-sage animate-pulse"></div>
                {p.website ? (p.website.endsWith('/') ? p.website.slice(8, -1) : p.website.slice(8)) : 'localhost:3000'}
              </div>
              {/* Links inside header */}
              <div className="flex items-center gap-2 absolute right-3">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                )}
                {p.website && (
                  <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit Site">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Preview Area */}
            <div className="w-full aspect-video relative bg-black overflow-hidden border-b border-gray-800">
              {p.website ? (
                <div className="w-full h-full relative">
                  {/* Using iframe with dark color scheme forced via CSS to avoid white flashes */}
                  <iframe
                    src={p.website}
                    title={p.title}
                    className="w-[125%] h-[125%] scale-[0.8] origin-top-left absolute top-0 left-0 border-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ colorScheme: 'dark' }}
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                  />
                  <a href={p.website} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`Visit ${p.title}`}></a>
                </div>
              ) : p.image ? (
                <div className="w-full h-full relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`View ${p.title} on GitHub`}></a>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 font-display text-4xl">
                  {p.emoji || '✧'}
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col p-4 sm:p-5 relative z-10 bg-[#0a0a0a]">
              <h3 className="font-display text-lg font-bold text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-lavender group-hover:to-accent-rose transition-all duration-300">
                {p.title}
              </h3>

              <div className="text-gray-400 text-[13px] leading-relaxed mb-4 flex-1 space-y-1.5">
                {Array.isArray(p.description) ? (
                  <ul className="list-disc pl-4 space-y-1 marker:text-gray-600">
                    {p.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{p.description}</p>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700/50 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </RevealOnScroll>
      ))}
    </div>
      </div>
    </div>
  </section>
);

export default Projects;
