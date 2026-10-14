import { motion } from "motion/react";

const COLS = 16;
const ROWS = 9;
const COLORS = ["#C8FF00", "#00E0FF", "#4B63FF", "#17246B", "#C8FF00", "#17246B", "#FF20A1"];

function noise(i: number, seed: number) {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Barrido de píxeles que cruza la pantalla en cada cambio de slide. */
export function PixelWipe({ direction, seed }: { direction: 1 | -1; seed: number }) {
  return (
    <div className="pixel-wipe" aria-hidden="true">
      {Array.from({ length: COLS * ROWS }, (_, i) => {
        const col = i % COLS;
        const order = direction === 1 ? col : COLS - 1 - col;
        const show = noise(i, seed) < 0.55;
        const color = COLORS[Math.floor(noise(i + 500, seed) * COLORS.length)];
        return (
          <motion.span
            key={i}
            style={{ background: show ? color : "transparent" }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.4, 1, 1, 0.6] }}
            transition={{
              duration: 0.55,
              delay: order * 0.025 + noise(i + 1000, seed) * 0.12,
              times: [0, 0.25, 0.6, 1],
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
