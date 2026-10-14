import { motion } from "motion/react";
import { NeaIsotipo } from "../components/brand";
import { EASE } from "../components/ease";
import { Highlight, Words } from "../components/Reveal";

export function Star() {
  return (
    <div className="frase">
      <NeaIsotipo className="marca-agua marca-agua--centro" />
      <h2 className="mega frase__texto">
        <Words words={["Enamórense"]} delay={0.15} />
        <br />
        <Words words={["del"]} delay={0.3} />{" "}
        <Highlight delay={0.7}>
          <Words words={["problema,"]} delay={0.38} />
        </Highlight>
        <br />
        <motion.span
          className="frase__no"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          <Words words={["no", "de", "la", "solución."]} delay={1.1} step={0.1} />
          <motion.span
            className="frase__tachado"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.85, duration: 0.55, ease: EASE }}
          />
        </motion.span>
      </h2>
    </div>
  );
}
