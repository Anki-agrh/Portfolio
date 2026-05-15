import RevealOnScroll from '../animations/RevealOnScroll';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'ET Hackathon',
    place: 'SemiFinalist Economic Times Hackathon 2026',
    href: '/images/certificates/ET-AI_Hackathon_2026_Certificate_Ankita_Agrahari.pdf',
    image: '/images/certificates/ET-AI_Hackathon_2026_Certificate_Ankita_Agrahari.png',
    rot: -4,
    yOffset: 10,
  },
  {
    title: 'Python AI Course',
    place: 'Navgurukul',
    href: '/images/certificates/python_ai%20certificate.pdf',
    image: '/images/certificates/python_ai certificate.png',
    rot: 3,
    yOffset: -5,
  },
  {
    title: 'FLY Program',
    place: 'Finding Leader in You (CMI)',
    href: '/images/certificates/fly-certificate.pdf',
    image: '/images/certificates/fly-certificate.png',
    rot: -2,
    yOffset: 15,
  },
  {
    title: 'Art Certificate',
    place: 'A Grade in State Level Art Competition',
    href: '/images/certificates/Art_Certificate.jpg',
    image: '/images/certificates/Art_Certificate.jpg',
    rot: 5,
    yOffset: 0,
  },
];

const Certifications = () => (
  <section id="certifications" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-text-muted/20">
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
      
      {/* Title */}
      <div>
        <h2 className="uppercase tracking-[0.2em] text-sm font-semibold text-text-primary mb-2">Certifications</h2>
        <div className="w-8 h-[1px] bg-text-primary"></div>
      </div>

      {/* Content */}
      <RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {certificates.map((c, i) => {
            const hasImage = Boolean(c.image) && /\.(jpe?g|png|webp|avif|gif|svg)$/i.test(c.image);
            return (
              <motion.a
                key={i}
                href={encodeURI(c.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full relative z-0"
                initial={{ rotate: c.rot, y: c.yOffset }}
                animate={{
                  y: [c.yOffset, c.yOffset - 12, c.yOffset],
                  rotate: [c.rot, c.rot + 1.5, c.rot],
                }}
                transition={{
                  duration: 4 + (i % 2),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  y: c.yOffset - 15,
                  zIndex: 20,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <div className="relative h-full p-3 pb-5 border border-text-muted/20 bg-polaroid-bg shadow-sm flex flex-col transform-gpu transition-shadow duration-300 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-transparent shadow-[0px_10px_20px_rgba(0,0,0,0.2)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"></div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-washi-lavender opacity-80 shadow-sm -rotate-2 z-10 transition-transform duration-300 group-hover:scale-110"></div>

                  <div className="aspect-[4/3] w-full mb-4 bg-bg-secondary overflow-hidden relative border border-text-muted/10 group-hover:shadow-inner transition-shadow duration-500">
                    {hasImage ? (
                      <img
                        src={encodeURI(c.image)}
                        alt={c.title}
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-text-muted/70 font-display text-center bg-bg-secondary px-4" style={{ display: hasImage ? 'none' : 'flex' }}>
                      <div className="flex items-center justify-center w-14 h-14 rounded-full border border-text-muted/20 bg-white/80 text-text-muted/80">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
                          <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7V3.5L20.5 9H15Zm-1 1h5v9H6V4h7v6Zm-1 4h3v2h-3v-2Zm0-4h5v2h-5V10Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">PDF Certificate</span>
                      <span className="text-xs">Click to open</span>
                    </div>
                  </div>

                  <h4 className="font-display text-lg text-text-primary group-hover:text-accent-rose transition-colors mb-1">{c.title}</h4>
                  <p className="text-xs text-text-muted leading-tight line-clamp-2">{c.place}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </RevealOnScroll>

    </div>
  </section>
);

export default Certifications;
