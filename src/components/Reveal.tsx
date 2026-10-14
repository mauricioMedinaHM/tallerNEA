import { motion } from "motion/react";
import { Fragment, type ReactNode } from "react";

import { EASE } from "./ease";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right" | "scale";
};

const offsets = {
  up: { y: "1.4em", x: 0, scale: 1 },
  left: { x: "-2.5em", y: 0, scale: 1 },
  right: { x: "2.5em", y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.85 },
};

export function Reveal({ children, delay = 0, className, from = "up" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", ...offsets[from] }}
      animate={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.75, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Palabras que suben desde una máscara, una detrás de otra. */
export function Words({
  words,
  delay = 0,
  step = 0.08,
  className,
  wordClassName,
}: {
  words: string[];
  delay?: number;
  step?: number;
  className?: string;
  wordClassName?: (word: string, index: number) => string | undefined;
}) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="palabra-mascara">
            <motion.span
              className={`palabra ${wordClassName?.(word, i) ?? ""}`}
              initial={{ y: "110%", rotate: 4 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ delay: delay + i * step, duration: 0.8, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

/** Bloque lima que se "pinta" detrás de una palabra. */
export function Highlight({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="resaltado">
      <motion.span
        className="resaltado__fondo"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay, duration: 0.6, ease: EASE }}
      />
      <motion.span
        initial={{ color: "#ffffff" }}
        animate={{ color: "#060a1c" }}
        transition={{ delay: delay + 0.25, duration: 0.3 }}
      >
        {children}
      </motion.span>
    </span>
  );
}
