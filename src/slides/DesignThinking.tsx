import { motion } from "motion/react";
import { EASE } from "../components/ease";
import { Reveal } from "../components/Reveal";
import { designThinking } from "../data/slides";

const STEP_DELAY = 0.32;

export function DesignThinking() {
  return (
    <div className="contenido">
      <Reveal delay={0.1}>
        <h2 className="h2">
          Design thinking, <span className="acento">versión ideathon</span>
        </h2>
      </Reveal>

      <ol className="pasos">
        <motion.span
          className="pasos__linea"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: STEP_DELAY * designThinking.steps.length, ease: "linear" }}
        />
        {designThinking.steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="paso">
            <motion.span
              className="icono paso__icono"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4 + i * STEP_DELAY, type: "spring", stiffness: 300, damping: 15 }}
            >
              <Icon aria-hidden="true" />
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: "1.2em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * STEP_DELAY, duration: 0.6, ease: EASE }}
            >
              <span className="num-contorno paso__num">{String(i + 1).padStart(2, "0")}</span>
              <p className="paso__titulo">{title}</p>
              <p className="paso__texto">{text}</p>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}
