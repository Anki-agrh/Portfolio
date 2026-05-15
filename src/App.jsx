import { useTheme } from './hooks/useTheme';
import SparkleCursor from './components/animations/SparkleCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Marquee from './components/ui/Marquee';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Crafts from './components/sections/Crafts';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <SparkleCursor />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Skills />
        <Crafts />
      </main>

      <Footer />
    </>
  );
}

export default App;
