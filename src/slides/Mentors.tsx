import { motion } from "motion/react";
import { Compass, Users } from "lucide-react";
import { EASE } from "../components/ease";
import { Reveal } from "../components/Reveal";
import { mentors } from "../data/slides";

function Bubble({ text, delay }: { text: string; delay: number }) {
  return (
    <div className="burbuja-fila">
      <motion.span
        className="burbuja__avatar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay, type: "spring", stiffness: 320, damping: 18 }}
      >
        <Users aria-hidden="true" />
      </motion.span>
      <div className="burbuja-contenedor">
        <motion.span
          className="burbuja__escribiendo"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay, duration: 0.9, times: [0, 0.15, 0.8, 1] }}
        >
          {[0, 1, 2].map((d) => (
            <motion.i
              key={d}
              animate={{ y: ["0em", "-0.35em", "0em"] }}
              transition={{ repeat: 3, duration: 0.45, delay: delay + d * 0.12 }}
            />
          ))}
        </motion.span>
        <motion.p
          className="burbuja bisel"
          initial={{ opacity: 0, scale: 0.8, x: "-1.5em" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: delay + 0.85, type: "spring", stiffness: 240, damping: 20 }}
        >
          “{text}”
        </motion.p>
      </div>
    </div>
  );
}

export function Mentors() {
  return (
    <div className="mentores">
      <div className="mentores__izq">
        <Reveal delay={0.1}>
          <h2 className="h1">
            Hablen con los <span className="acento">mentores</span>
          </h2>
        </Reveal>
        <div className="burbujas">
          {mentors.bubbles.map((b, i) => (
            <Bubble key={b} text={b} delay={0.5 + i * 1.3} />
          ))}
        </div>
      </div>

      <Reveal delay={3.0} className="mentores__der tarjeta" from="right">
        <motion.span
          className="mentores__brujula"
          initial={{ rotate: -160 }}
          animate={{ rotate: [-160, 25, -10, 0] }}
          transition={{ delay: 3.1, duration: 1.4, ease: EASE }}
        >
          <Compass aria-hidden="true" />
        </motion.span>
        <p className="mentores__cierre">
          {mentors.closingA}
          <br />
          <strong className="acento">{mentors.closingB}</strong>
        </p>
      </Reveal>
    </div>
  );
}
