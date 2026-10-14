import { motion } from "motion/react";
import { Link2 } from "lucide-react";
import { EASE } from "../components/ease";
import { Reveal } from "../components/Reveal";
import { blockchain } from "../data/slides";

export function Blockchain() {
  return (
    <div className="contenido">
      <Reveal delay={0.1}>
        <h2 className="h2">
          Blockchain: <span className="acento">3 usos</span> para buscar problemas
        </h2>
      </Reveal>

      <div className="grilla-3">
        {blockchain.uses.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={0.3 + i * 0.14} from="up">
            <div className="tarjeta tarjeta--uso">
              <span className="num-contorno tarjeta__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="icono">
                <Icon aria-hidden="true" />
              </span>
              <p className="tarjeta__titulo">{title}</p>
              <p className="tarjeta__texto">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="cadena">
        <motion.div
          className="cadena__lado cadena__lado--on bisel"
          initial={{ opacity: 0, x: "3em" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: EASE }}
        >
          <span className="cadena__titulo">On-chain</span>
          <span className="cadena__chips">
            {blockchain.onChain.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </span>
        </motion.div>
        <motion.span
          className="cadena__nudo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.85, type: "spring", stiffness: 260, damping: 16 }}
        >
          <Link2 aria-hidden="true" />
        </motion.span>
        <motion.div
          className="cadena__lado cadena__lado--off bisel"
          initial={{ opacity: 0, x: "-3em" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: EASE }}
        >
          <span className="cadena__titulo">Off-chain</span>
          <span className="cadena__chips">
            {blockchain.offChain.map((c) => (
              <span key={c} className="chip chip--cian">
                {c}
              </span>
            ))}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
