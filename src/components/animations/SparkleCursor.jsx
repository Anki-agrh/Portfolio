import { useEffect, useRef } from 'react';

const SparkleCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: -100, y: -100 };
    let frame = 0;
    let animId;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    document.addEventListener('mousemove', onMove);

    class Sparkle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 20;
        this.y = y + (Math.random() - 0.5) * 20;
        this.size = Math.random() * 3 + 1.5;
        this.life = 1;
        this.decay = Math.random() * 0.025 + 0.015;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2 - 0.5;
        const dark = document.documentElement.classList.contains('dark');
        const c = dark ? ['#FF6B8A','#B388FF','#FFD54F','#69F0AE'] : ['#E8919C','#D5C0E8','#F0D060','#7BB661'];
        this.color = c[Math.floor(Math.random() * c.length)];
      }
      update() { this.x += this.vx; this.y += this.vy; this.life -= this.decay; this.size *= 0.98; }
      draw() {
        ctx.save(); ctx.globalAlpha = this.life; ctx.fillStyle = this.color;
        ctx.beginPath();
        const s = this.size;
        ctx.moveTo(this.x, this.y - s);
        ctx.quadraticCurveTo(this.x + s*.3, this.y - s*.3, this.x + s, this.y);
        ctx.quadraticCurveTo(this.x + s*.3, this.y + s*.3, this.x, this.y + s);
        ctx.quadraticCurveTo(this.x - s*.3, this.y + s*.3, this.x - s, this.y);
        ctx.quadraticCurveTo(this.x - s*.3, this.y - s*.3, this.x, this.y - s);
        ctx.fill(); ctx.restore();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      if (frame % 3 === 0 && mouse.x > 0) particles.push(new Sparkle(mouse.x, mouse.y));
      particles.forEach(p => { p.update(); p.draw(); });
      particles = particles.filter(p => p.life > 0);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => { window.removeEventListener('resize', resize); document.removeEventListener('mousemove', onMove); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[9999] pointer-events-none" />;
};

export default SparkleCursor;
