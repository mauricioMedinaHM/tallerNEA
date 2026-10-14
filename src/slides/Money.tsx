import { motion } from "motion/react";
import { CalendarSync, Gauge, Percent } from "lucide-react";
import { Highlight, Reveal } from "../components/Reveal";
import { money } from "../data/slides";

const modelIcons = [Percent, CalendarSync, Gauge];

export function Money() {
  return (
    <div className="contenido">
      <Reveal delay={0.1}>
        <h2 className="h2">
          ¿Cómo ganás <span className="acento">plata?</span>
        </h2>
      </Reveal>

      <div className="plata">
        <ul className="plata__lista">
          {money.items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.3 + i * 0.14} from="left">
              <li className="item-icono">
                <span className="icono icono--contorno">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="item-icono__titulo">{title}</span>
                  <span className="item-icono__texto">{text}</span>
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="modelos">
          <Reveal delay={0.7}>
            <span className="modelos__label">Modelo</span>
          </Reveal>
          {money.models.map((m, i) => {
            const Icon = modelIcons[i];
            return (
              <motion.div
                key={m}
                className="modelo bisel"
                initial={{ opacity: 0, x: "2em", rotateX: 70 }}
                animate={{ opacity: 1, x: 0, rotateX: 0 }}
                transition={{ delay: 0.85 + i * 0.16, type: "spring", stiffness: 200, damping: 20 }}
              >
                <Icon aria-hidden="true" />
                <span>{m}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Reveal delay={1.5}>
        <p className="h2 plata__cierre">
          Rentable, <Highlight delay={1.9}>sin matar al usuario.</Highlight>
        </p>
      </Reveal>
    </div>
  );
}
