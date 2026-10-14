import { motion } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import { InstagramIcon } from "../components/brand";
import { EASE } from "../components/ease";
import { Reveal } from "../components/Reveal";
import { promptUrl, promptUrlIsLocal } from "../config";
import { meta, onePager } from "../data/slides";

export function OnePager() {
  return (
    <div className="hoja-slide">
      <div className="hoja-slide__izq">
        <Reveal delay={0.1}>
          <h2 className="h2">
            Su producto en <span className="acento">una hoja</span>
          </h2>
        </Reveal>

        <motion.ol
          className="hoja bisel bisel--lg"
          initial={{ opacity: 0, y: "2em", rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
        >
          {onePager.rows.map((row, i) => (
            <motion.li
              key={row.title}
              className="hoja__fila"
              initial={{ opacity: 0, x: "-1.5em" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.18, duration: 0.55, ease: EASE }}
            >
              <span className="hoja__num">{i + 1}</span>
              <span>
                <span className="hoja__titulo">{row.title}</span>
                <span className="hoja__texto">{row.text}</span>
              </span>
            </motion.li>
          ))}
        </motion.ol>

        <Reveal delay={1.6}>
          <p className="h3 hoja-slide__cierre">
            ¿A quién se lo mostrarían <span className="acento">el lunes?</span>
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.4} from="right" className="qr-bloque">
        <div className="seguir">
          <p className="seguir__titulo">{onePager.followTitle}</p>
          <p className="seguir__texto">{onePager.followText}</p>
          <div className="qr__redes">
            <span>
              <InstagramIcon /> @{meta.instagram}
            </span>
            <span>
              <InstagramIcon /> @{meta.cuyoInstagram}
            </span>
          </div>
        </div>
        <div className="qr bisel" data-no-nav>
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ delay: 1.2, duration: 0.9, ease: EASE }}
          >
            <QRCodeSVG value={promptUrl} size={512} level="M" marginSize={0} bgColor="#ffffff" fgColor="#060a1c" />
          </motion.div>
          <motion.span
            className="qr__scan"
            aria-hidden="true"
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: ["0%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 2.2, duration: 2.4, repeat: 1, repeatDelay: 0.8 }}
          />
        </div>
        <p className="qr__label">{onePager.qrLabel}</p>
        <p className={`qr__url ${promptUrlIsLocal ? "qr__url--local" : ""}`}>
          {promptUrl.replace(/^https?:\/\//, "")}
          {promptUrlIsLocal && <span> · configurar VITE_PUBLIC_URL</span>}
        </p>
      </Reveal>
    </div>
  );
}
