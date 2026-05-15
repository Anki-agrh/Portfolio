import RevealOnScroll from '../animations/RevealOnScroll';

const experiences = [
  {
    role: 'Research Intern',
    company: 'VLED Lab, IIT Ropar',
    period: 'May 2026 — Present',
    type: 'Internship',
    description:
      'Working on cutting-edge research in the VLED (Vision, Language, and Embodied Decision-making) Lab under IIT Ropar faculty. Contributing to projects at the intersection of computer vision, NLP, and decision-making systems.',
    tags: ['Research', 'Computer Vision', 'NLP', 'Deep Learning'],
    accent: 'sage',
    current: true,
  },
  {
    role: 'Software Development Engineer (SDE) Intern',
    company: 'Amazon',
    period: 'June 2025 — July 2025',
    type: 'Internship',
    description: [
      'Scaled month-end tasks by optimizing system architecture, improving stability and ensuring execution under peak load conditions',
      'Enhanced regional Tax Dashboard by refactoring UI components and optimizing SQL queries with indexing strategies, reducing execution time by 35% for 5,000+ sellers',
      'Debugged and resolved critical data retrieval issues in backend services, ensuring 99.8% uptime and accurate data delivery to 50+ internal and external stakeholders'
    ],
    tags: ['AWS', 'Backend', 'Distributed Systems', 'Java', 'CI/CD Pipeline'],
    accent: 'butter',
    current: false,
  },
];

const accentMap = {
  sage: {
    dot: 'bg-accent-sage-vivid',
    tag: 'bg-accent-sage/20 text-accent-sage-vivid border-accent-sage/30',
    badge: 'bg-accent-sage/20 text-accent-sage-vivid border-accent-sage/40',
    line: 'border-accent-sage/30',
  },
  butter: {
    dot: 'bg-accent-butter-vivid',
    tag: 'bg-accent-butter/30 text-accent-plum border-accent-butter/50',
    badge: 'bg-accent-butter/30 text-accent-plum border-accent-butter/50',
    line: 'border-accent-butter/30',
  },
  rose: {
    dot: 'bg-accent-rose',
    tag: 'bg-accent-rose-soft text-accent-rose border-accent-rose/30',
    badge: 'bg-accent-rose-soft text-accent-rose border-accent-rose/40',
    line: 'border-accent-rose/30',
  },
  lavender: {
    dot: 'bg-accent-lavender-vivid',
    tag: 'bg-accent-lavender/20 text-accent-lavender-vivid border-accent-lavender/30',
    badge: 'bg-accent-lavender/20 text-accent-lavender-vivid border-accent-lavender/40',
    line: 'border-accent-lavender/30',
  },
};

const Experience = () => (
  <section id="experience" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-text-muted/20">
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">

      {/* Title */}
      <div>
        <h2 className="uppercase tracking-[0.2em] text-sm font-semibold text-text-primary mb-2">Experience</h2>
        <div className="w-8 h-[1px] bg-text-primary"></div>
      </div>

      {/* Content */}
      <RevealOnScroll>
        <div className="max-w-3xl">
          <div className="space-y-14">
            {experiences.map((exp, i) => {
              const colors = accentMap[exp.accent] || accentMap.sage;
              return (
                <div key={i} className={`relative pl-8 border-l-2 ${colors.line}`}>
                  {/* Timeline dot */}
                  <div className={`absolute top-1.5 -left-[7px] w-3 h-3 rounded-full ${colors.dot} ring-4 ring-bg-primary`}></div>

                  {/* Current badge */}
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-accent-sage-vivid bg-accent-sage/15 px-3 py-1 rounded-full border border-accent-sage/30 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sage-vivid animate-pulse"></span>
                      Currently here
                    </span>
                  )}

                  {/* Role & Company */}
                  <h3 className="font-display text-2xl text-text-primary mb-1">{exp.role}</h3>
                  <p className="text-text-secondary font-medium text-base mb-1">{exp.company}</p>

                  {/* Period & Type */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-hand text-lg text-text-muted">{exp.period}</span>
                    <span className={`text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-sm border ${colors.badge}`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="text-text-secondary text-[0.95rem] leading-relaxed mb-5 space-y-2">
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc pl-5 space-y-1.5 marker:text-text-muted">
                        {exp.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{exp.description}</p>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className={`text-[11px] uppercase tracking-wider font-medium px-3 py-1 rounded-full border ${colors.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

    </div>
  </section>
);

export default Experience;
