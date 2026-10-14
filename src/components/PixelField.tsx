import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  color: string;
  phase: number;
  speed: number;
  rank: number;
};

const PALETTE = ["#C8FF00", "#C8FF00", "#00E0FF", "#00E0FF", "#FF20A1", "#FFBA00", "#4B63FF", "#17246B", "#060A1C"];

function smooth(t: number) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

/**
 * Patrón de píxeles de la marca, vivo: un marco que entra por los bordes,
 * late y cada tanto glitchea una fila. `intensity` (0 a 1) define cuántos
 * píxeles se ven; los cambios entre slides se interpolan.
 */
export function PixelField({ intensity }: { intensity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const target = useRef(intensity);

  useEffect(() => {
    target.current = intensity;
  }, [intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let cell = 30;
    let current = target.current;
    let raf = 0;
    let glitchRow = -1;
    let glitchUntil = 0;
    let nextGlitch = 0;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cell = Math.max(14, Math.round(Math.min(width, height * 1.7778) / 52));
      particles = [];
      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);
      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const nx = (cx + 0.5) / cols;
          const ny = (cy + 0.5) / rows;
          const edge = Math.min(Math.min(nx, 1 - nx) / 0.12, Math.min(ny, 1 - ny) / 0.17);
          const density = (1 - smooth(edge)) * 0.8;
          if (Math.random() > density) continue;
          const half = Math.random() < 0.28;
          particles.push({
            x: cx * cell + (half ? (Math.random() < 0.5 ? 0 : cell / 2) : 0),
            y: cy * cell + (half ? (Math.random() < 0.5 ? 0 : cell / 2) : 0),
            size: half ? cell / 2 : cell,
            color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
            phase: Math.random() * Math.PI * 2,
            speed: 0.6 + Math.random() * 1.6,
            rank: Math.random() * (0.35 + 0.65 * smooth(edge * 1.4)),
          });
        }
      }
    };

    const draw = (time: number) => {
      const t = time / 1000;
      current += (target.current - current) * 0.06;
      ctx.clearRect(0, 0, width, height);

      if (!reduced && time > nextGlitch) {
        glitchRow = Math.floor(Math.random() * Math.ceil(height / cell));
        glitchUntil = time + 140;
        nextGlitch = time + 1200 + Math.random() * 1800;
      }
      const glitching = time < glitchUntil;

      for (const p of particles) {
        const visible = smooth((current - p.rank) / 0.12);
        if (visible <= 0.01) continue;
        const pulse = reduced ? 0.85 : 0.5 + 0.4 * Math.sin(t * p.speed + p.phase);
        ctx.globalAlpha = visible * pulse;
        ctx.fillStyle = p.color;
        const shift = glitching && Math.floor(p.y / cell) === glitchRow ? cell * (p.phase > Math.PI ? 1 : -1) : 0;
        ctx.fillRect(p.x + shift, p.y, p.size, p.size);
      }
      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    build();
    if (reduced) {
      current = target.current;
      draw(0);
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      build();
      if (reduced) draw(0);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pixel-field" aria-hidden="true" />;
}
