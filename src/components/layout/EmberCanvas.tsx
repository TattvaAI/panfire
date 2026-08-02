import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  color: string;
}

export const EmberCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const colors = ['#ff4d00', '#ff8c00', '#ffaa00', '#ff2200', '#ffffff'];
    const particleCount = 60;
    const particles: Particle[] = [];

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: height + Math.random() * 40,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 1.5 + 0.4,
      speedX: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.8 + 0.2,
      fadeSpeed: Math.random() * 0.006 + 0.002,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * height;
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle mouse magnetic glow
      const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400);
      grad.addColorStop(0, 'rgba(255, 77, 0, 0.04)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render embers
      particles.forEach((p, index) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity -= p.fadeSpeed;

        if (p.y < -10 || p.opacity <= 0) {
          particles[index] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
