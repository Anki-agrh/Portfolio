import { useScrollReveal } from '../../hooks/useScroll';

const RevealOnScroll = ({ children, className = '' }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
