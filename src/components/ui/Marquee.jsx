const items = ['✦ developer', '♥ creator', '✿ learner', '☆ designer', '✦ tech enthusiast', '♥ problem solver', '✿ chai lover', '☆ data science'];

const Marquee = () => (
  <div className="bg-[var(--marquee-bg,var(--accent-rose-soft))] py-3.5 overflow-hidden transition-colors duration-500">
    <div className="flex gap-10 whitespace-nowrap animate-marquee font-hand text-xl font-semibold text-[var(--marquee-text,var(--accent-plum))]">
      {[...items, ...items].map((t, i) => (
        <span key={i} className="flex-shrink-0">{t}</span>
      ))}
    </div>
  </div>
);

export default Marquee;
