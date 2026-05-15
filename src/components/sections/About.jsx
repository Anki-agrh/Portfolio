import RevealOnScroll from '../animations/RevealOnScroll';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-text-muted/20">
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
      
      {/* Title */}
      <div>
        <h2 className="uppercase tracking-[0.2em] text-sm font-semibold text-text-primary mb-2">About Me</h2>
        <div className="w-8 h-[1px] bg-text-primary"></div>
      </div>

      {/* Content */}
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-[1.1rem] text-text-secondary leading-relaxed">
            <p>
              <span className="text-2xl font-display text-text-primary">I'm a detail-oriented developer</span> with a love for minimal layouts, responsive interfaces, and meaningful design. I believe good code is not just functional — it's felt through the user experience.
            </p>
            <p>
              Currently pursuing my B.Tech CSE at <span className="text-text-primary font-medium border-b border-accent-sage-vivid/40 pb-0.5">Madan Mohan Malaviya University of Technology</span>. My focus is on crafting polished web applications using React and modern CSS frameworks, ensuring that performance and aesthetics go hand-in-hand.
            </p>
          </div>
          
          <div className="relative flex justify-center items-center mt-8 md:mt-0 [perspective:1000px]">
            <motion.div 
              className="bg-polaroid-bg text-text-primary dark:bg-[#B9C4B1] dark:text-[#1E241C] p-8 border border-text-primary/10 dark:border-black/10 shadow-polaroid rotate-2 relative max-w-[300px] w-full transition-colors duration-500"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10, 
                rotateX: 5,
                rotateZ: 0,
                z: 50,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Washi tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-washi-lavender shadow-sm -rotate-2 transition-transform duration-300"></div>
              
              <p className="font-hand text-[1.8rem] md:text-3xl text-center leading-tight mb-4">
                purposeful design,<br/>meaningful impact.
              </p>
              
              <div className="flex justify-center opacity-60">
                <span className="text-2xl">✨</span>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>

    </div>
  </section>
);

export default About;
