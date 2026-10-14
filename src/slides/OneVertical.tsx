import { motion } from "motion/react";
import { Gift, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "../components/ease";
import { Reveal, Words } from "../components/Reveal";
import { vertical } from "../data/slides";

export function OneVertical() {
  const [focus, setFocus] = useState<number | null>(null);

  useEffect(() => {
    let step = 0;
    let id = 0;
    const start = window.setTimeout(() => {
      setFocus(0);
      id = window.setInterval(() => {
        step = (step + 1) % vertical.options.length;
        setFocus(step);
      }, 1900);
    }, 1500);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="contenido contenido--centro vertical">
      <Reveal delay={0.1}>
        <p className="etiqueta etiqueta--icono">
          <Gift aria-hidden="true" /> {vertical.label}
        </p>
      </Reveal>

      <h2 className="mega vertical__titulo">
        <Words words={["Una", "sola"]} delay={0.25} />{" "}
        <Words words={["vertical."]} delay={0.45} wordClassName={() => "acento"} />
      </h2>

      <div className="vertical__opciones">
        {vertical.options.map(({ icon: Icon, title }, i) => {
          const isFocus = focus === i;
          return (
            <Reveal key={title} delay={0.7 + i * 0.12} from="up">
              <motion.div
                className={`vertical__opcion bisel ${isFocus ? "is-foco" : ""}`}
                animate={{ opacity: focus === null || isFocus ? 1 : 0.4, scale: isFocus ? 1.06 : 1 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <Icon aria-hidden="true" />
                <span>{title}</span>
              </motion.div>
              <div className="vertical__riel">
                {isFocus && (
                  <motion.span
                    layoutId="vertical-foco"
                    className="vertical__indicador"
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  />
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={1.2} className="vertical__cita">
        <Trophy aria-hidden="true" />
        <p>
          {vertical.quoteA} <strong className="acento">{vertical.quoteB}</strong>
        </p>
      </Reveal>
    </div>
  );
}
