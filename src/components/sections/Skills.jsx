import { skills } from '../../data/skills';
import RevealOnScroll from '../animations/RevealOnScroll';

const badgeColor = {
  rose: 'bg-accent-rose/20 text-accent-rose border-accent-rose/30',
  lavender: 'bg-accent-lavender/20 text-accent-lavender border-accent-lavender/30',
  butter: 'bg-accent-butter/30 text-accent-plum border-accent-butter/50',
  sage: 'bg-accent-sage/20 text-accent-sage-vivid border-accent-sage/30',
};

const Skills = () => (
  <section id="skills" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-text-muted/20">
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
      
      {/* Title */}
      <div>
        <h2 className="uppercase tracking-[0.2em] text-sm font-semibold text-text-primary mb-2">Skills & Tech</h2>
        <div className="w-8 h-[1px] bg-text-primary"></div>
      </div>

      {/* Content */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium border ${badgeColor[s.color] || 'bg-bg-secondary text-text-secondary border-text-muted/30'}`}>
              {s.name}
            </span>
          ))}
        </div>
      </RevealOnScroll>

    </div>
  </section>
);

export default Skills;
