import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleHireMe = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:ankitaagrahari005@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Ankita%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!';
  };

  return (
    <section id="hero" className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-24 min-h-screen flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 lg:gap-8">

        {/* Text Content */}
        <motion.div
          className="z-10 text-center lg:text-left flex flex-col items-center lg:items-start mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 lg:mb-10 w-full">
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-text-muted mb-4 block">Full Stack Developer</span>
            <h1 className="font-display text-[clamp(4rem,8vw,7rem)] leading-[0.9] text-text-primary tracking-tight mb-2">
              Creative<br />developer
            </h1>
            <p className="font-hand text-[clamp(2rem,4vw,3rem)] text-text-secondary italic transform -rotate-2 -mt-2 ml-4">
              with a passion for<br />visual storytelling <span className="font-sans text-xl not-italic ml-2">♡</span>
            </p>
          </div>

          <p className="text-base text-text-secondary mb-10 max-w-md leading-relaxed">
            I'm a full stack developer who loves turning ideas into interactive experiences. I build robust systems, but my heart lies in crafting pixel-perfect, engaging interfaces.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="mailto:ankitaagrahari005@gmail.com" onClick={handleHireMe}
              className="hire-me-btn inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-md">
              Hire Me
            </a>
            <a href="/resume/ankita-resume.pdf" download="Ankita-Agrahari-Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm bg-transparent text-text-primary border border-text-primary hover:bg-text-primary/5 transition-colors duration-300">
              Download Resume ↓
            </a>
          </div>
        </motion.div>

        {/* Annotated Photo */}
        <motion.div
          className="relative flex justify-center items-center mt-10 lg:mt-0 z-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="relative w-[280px] sm:w-[320px] aspect-[4/5] mt-16 sm:mt-0 [perspective:1000px]"
            whileHover={{
              scale: 1.05,
              rotateY: -10,
              rotateX: 5,
              z: 50,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            {/* Polaroid container */}
            <div className="absolute inset-0 bg-polaroid-bg p-3 pb-12 rounded-sm shadow-polaroid rotate-2 z-10 transition-transform duration-300 group-hover:shadow-[20px_20px_40px_-10px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-1 w-24 h-8 bg-washi-pink shadow-sm z-20" />
              <img src="/images/profile/ankita-profile.jpg" alt="Ankita Agrahari" className="w-full h-full object-cover filter contrast-[1.05]" />
            </div>

            {/* Annotations */}
            <div className="absolute inset-[-60px] md:inset-[-60px] pointer-events-none z-20 font-hand text-[1.4rem] text-text-primary leading-none transform scale-[0.6] sm:scale-75 md:scale-100 origin-center transition-transform">

              {/* Top Left: Name */}
              <motion.div 
                className="absolute top-[-10px] left-[-30px] flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
              >
                <span className="text-[1.8rem] text-accent-sage-vivid whitespace-nowrap">Hi, I am Ankita Agrahari</span>
                <svg className="w-16 h-12 mt-1 -rotate-12" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M10,10 Q50,40 90,30" />
                  <path d="M80,20 L90,30 L80,40" />
                </svg>
              </motion.div>

              {/* Top Right: Overthinker */}
              <motion.div 
                className="absolute top-[0px] right-[-40px] flex flex-col items-center max-w-[150px]"
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
              >
                <span className="text-center text-[1.2rem] leading-tight text-accent-plum whitespace-nowrap">"21 yo CSE undergrad"</span>
                <svg className="w-12 h-16 mt-1 rotate-[60deg]" viewBox="0 0 50 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M40,10 Q10,50 20,90" />
                  <path d="M10,80 L20,90 L30,80" />
                </svg>
              </motion.div>

              {/* Top Right Secondary: Food */}
              <motion.div 
                className="absolute top-[25%] left-[90%] flex items-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
              >
                <svg className="w-14 h-14 mr-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {/* Circulating hand-drawn arrow pointing left */}
                  <path d="M80,90 C60,10 10,10 10,60" />
                  <path d="M0,45 L10,60 L25,48" />
                </svg>
                <div className="border border-text-primary/30 rounded-xl p-3 px-4 rotate-3 bg-polaroid-bg/60 backdrop-blur-sm shadow-sm whitespace-nowrap">
                  <span className="text-center text-[1.1rem] leading-tight block">delicous food is all<br />over my feed hehehe</span>
                </div>
              </motion.div>

              {/* Middle Left: Chaii */}
              <motion.div 
                className="absolute top-[35%] left-[-60px] flex items-center"
                initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.6, type: "spring" }}
              >
                <div className="relative inline-block text-center border-2 border-text-primary/30 rounded-[50%] p-5 -rotate-3 bg-polaroid-bg/30 backdrop-blur-sm">
                  <span className="relative z-10 text-[1.2rem] leading-tight block whitespace-nowrap">runs on<br />chaii <br />+ ideas</span>
                </div>
                <svg className="w-10 h-8 ml-1 rotate-12" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M10,25 Q50,15 90,25" />
                  <path d="M80,15 L90,25 L80,35" />
                </svg>
              </motion.div>

              {/* Middle Right: Comfort Zone */}
              <motion.div 
                className="absolute top-[45%] right-[-100px] flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.8, type: "spring" }}
              >
                <span className="text-center text-[1.1rem] leading-tight whitespace-nowrap">Shinchan and<br />Gulab Jamun<br />=<br />my comfort zone</span>
                <svg className="w-12 h-8 mt-1" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M90,25 Q50,50 10,25" />
                  <path d="M20,15 L10,25 L20,35" />
                </svg>
              </motion.div>

              {/* Bottom Left: Centering Div */}
              <motion.div 
                className="absolute bottom-[8%] left-[-80px] flex flex-col items-end"
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 2.0, type: "spring" }}
              >
                <svg className="w-14 h-14 mb-1 scale-y-[-1] -rotate-[30deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M10,90 Q50,50 90,10" />
                  <path d="M70,10 L90,10 L90,30" />
                </svg>
                <div className="border border-text-primary/40 rounded-lg p-4 px-5 rotate-2 bg-polaroid-bg/50 backdrop-blur-sm">
                  <span className="text-right text-[1.2rem] leading-tight block whitespace-nowrap">currently:<br />surviving</span>
                </div>
              </motion.div>

              {/* Bottom Right: Full Stack */}
              <motion.div 
                className="absolute bottom-[2%] right-[-40px] flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 2.2, type: "spring" }}
              >
                <svg className="w-10 h-14 mb-2 scale-x-[-1] rotate-[100deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M20,80 Q50,20 90,10" />
                  <path d="M70,10 L90,10 L90,30" />
                </svg>
                <span className="leading-tight text-center text-[1.4rem] bg-accent-butter-vivid/40 px-5 py-3 -rotate-3 whitespace-nowrap">full stack<br />developer</span>
              </motion.div>

              {/* Bottom Center: Unhinged */}
              <motion.div 
                className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-[120%] text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.4, type: "spring" }}
              >
                <span className="text-[1.3rem] unhinged-badge px-4 py-1.5 rounded-full inline-block rotate-1 shadow-lg whitespace-nowrap">a little unhinged. a lot creative.</span>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

