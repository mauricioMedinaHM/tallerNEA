import { motion } from "motion/react";
import { NotebookPen, TriangleAlert } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { solution } from "../data/slides";

export function Solution() {
  return (
    <div className="contenido">
      <Reveal delay={0.1}>
        <h2 className="h2">
          La solución: <span className="acento">¿qué necesita?</span>
        </h2>
      </Reveal>

      <div className="necesidades">
        {solution.needs.map(({ icon: Icon, title }, i) => (
          <Reveal key={title} delay={0.3 + i * 0.12} from="scale">
            <div className="necesidad bisel">
              <span className="icono">
                <Icon aria-hidden="true" />
              </span>
              <span>{title}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="solucion__fila">
        <Reveal delay={0.8} className="pregunta">
          <span className="pregunta__iconos" aria-hidden="true">
            <NotebookPen />
          </span>
          {solution.questions.map((question, i) => (
            <p key={question} className={`pregunta__texto ${i === 1 ? "acento" : ""}`}>
              {question}
            </p>
          ))}
        </Reveal>

        <Reveal delay={1.4} from="right" className="aviso-sobre">
          <motion.span
            className="aviso-sobre__icono"
            animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
            transition={{ delay: 2.1, duration: 0.7, repeat: Infinity, repeatDelay: 3.5 }}
          >
            <TriangleAlert aria-hidden="true" />
          </motion.span>
          <p className="aviso-sobre__titulo">{solution.warningTitle}</p>
          <p className="aviso-sobre__texto">{solution.warningText}</p>
        </Reveal>
      </div>
    </div>
  );
}
