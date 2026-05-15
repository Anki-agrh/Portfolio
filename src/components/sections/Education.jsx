import RevealOnScroll from '../animations/RevealOnScroll';

const Education = () => (
  <section id="education" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-text-muted/20">
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
      
      {/* Title */}
      <div>
        <h2 className="uppercase tracking-[0.2em] text-sm font-semibold text-text-primary mb-2">Education</h2>
        <div className="w-8 h-[1px] bg-text-primary"></div>
      </div>

      {/* Content */}
      <RevealOnScroll>
        <div className="max-w-3xl">
          
          <div className="space-y-12">
            {[
              { title: 'B.Tech in Computer Science and Engineering', place: 'Madan Mohan Malaviya University of Technology, Gorakhpur', year: '2023 — 2027', badge: 'CGPA: 8.21/10' },
              { title: 'Class 12th (CBSE)', place: '', year: '2022', badge: '94.6%' },
              { title: 'Class 10th (CBSE)', place: '', year: '2020', badge: '95.4%' },
            ].map((item, i) => (
              <div key={i} className="relative pl-6 border-l border-text-muted/20">
                <div className="absolute top-1.5 -left-[5px] w-2 h-2 rounded-full bg-text-primary"></div>
                <h3 className="font-display text-xl text-text-primary mb-1">{item.title}</h3>
                {item.place && <p className="text-text-secondary text-sm mb-2">{item.place}</p>}
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-hand text-lg text-text-muted">{item.year}</span>
                  <span className="text-[10px] uppercase tracking-widest text-text-primary bg-bg-secondary px-2 py-0.5 rounded-sm border border-text-muted/10">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>

    </div>
  </section>
);

export default Education;
