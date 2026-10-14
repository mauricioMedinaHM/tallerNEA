import { motion } from "motion/react";
import { CircleCheck } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { goodProblem } from "../data/slides";

export function GoodProblem() {
  return (
    <div className="contenido">
      <Reveal delay={0.1}>
        <h2 className="h2">
          Un buen problema <span className="acento">es...</span>
        </h2>
      </Reveal>

      <div className="grilla-4">
        {goodProblem.items.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={0.3 + i * 0.13} from="scale">
            <div className="tarjeta tarjeta--check">
              <motion.span
                className="tarjeta__check"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.75 + i * 0.13, type: "spring", stiffness: 320, damping: 16 }}
              >
                <CircleCheck aria-hidden="true" />
              </motion.span>
              <span className="icono icono--contorno">
                <Icon aria-hidden="true" />
              </span>
              <p className="tarjeta__titulo">{title}</p>
              {text && <p className="tarjeta__texto">{text}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
