import RevealOnScroll from '../animations/RevealOnScroll';
import { motion } from 'framer-motion';

const Crafts = () => (
  <section id="crafts" className="max-w-[1000px] mx-auto px-6 py-20 border-t border-text-muted/20">
    <RevealOnScroll>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-glass-bg backdrop-blur-md p-8 rounded-3xl border border-glass-border shadow-[0_8px_30px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">

        {/* Text Content */}
        <div className="flex-1 space-y-4 text-center md:text-left relative z-10">
          <h2 className="font-display text-4xl font-bold text-accent-plum">
            <span className="font-hand text-accent-rose text-3xl block -mb-2 -rotate-2">by the way...</span>
            Crafts & Designs
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            You can take my help to design birthday magazines, newspapers, and some crafts!
            <br className="hidden md:block" />
            <span className="italic text-text-primary">I am good at customizing crafts aka gift ideas hehehe ✿</span>
          </p>
        </div>

        {/* Ghibli Image with Organic Morphing Shape */}
        <div className="w-64 md:w-80 flex-shrink-0 relative">
          {/* Decorative background blob/circle */}
          <div className="absolute inset-[-10%] bg-accent-sage/30 blur-2xl animate-pulse"></div>

          {/* Morphing Image Wrapper */}
          <motion.div
            className="w-full aspect-[4/5] relative z-10 overflow-hidden shadow-[0_8px_32px_rgba(140,112,94,0.3)] border-[6px] border-bg-primary"
            animate={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "50% 50% 20% 80% / 25% 80% 20% 75%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="/images/ghibli.png"
              alt="Cute Ghibli girl"
              className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700 block"
            />
          </motion.div>
        </div>

      </div>
    </RevealOnScroll>
  </section>
);

export default Crafts;
