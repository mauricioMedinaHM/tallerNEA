import { motion } from "motion/react";
import { CalendarDays, MapPin } from "lucide-react";
import { CuyoLogo, NeaIsotipo, NeaLogo } from "../components/brand";
import { EASE } from "../components/ease";
import { Highlight, Reveal, Words } from "../components/Reveal";
import { meta } from "../data/slides";

export function Cover() {
  return (
    <div className="portada">
      <NeaIsotipo className="marca-agua" />

      <div className="portada__texto">
        <Reveal delay={0.1}>
          <p className="etiqueta">Taller de producto · {meta.event}</p>
        </Reveal>

        <h1 className="mega portada__titulo">
          <Words words={["Del", "problema"]} delay={0.2} />
          <br />
          <Words words={["real", "a", "un"]} delay={0.4} />
          <br />
          <Highlight delay={0.75}>
            <Words words={["producto", "viable"]} delay={0.6} />
          </Highlight>
        </h1>

        <Reveal delay={1.1} className="portada__speaker">
          <p className="portada__nombre">{meta.speaker}</p>
          <p className="portada__rol">{meta.role}</p>
        </Reveal>

        <Reveal delay={1.3} className="portada__logos">
          <NeaLogo className="logo-nea--grande" />
          <span className="portada__sep" aria-hidden="true" />
          <CuyoLogo className="logo-cuyo--grande" />
        </Reveal>

        <Reveal delay={1.5} className="portada__meta">
          <span>
            <CalendarDays aria-hidden="true" /> {meta.date}
          </span>
          <span>
            <MapPin aria-hidden="true" /> {meta.venue}
          </span>
        </Reveal>
      </div>

      <motion.figure
        className="portada__foto"
        initial={{ opacity: 0, y: "6%", rotate: 3 }}
        animate={{ opacity: 1, y: "0%", rotate: 0 }}
        transition={{ delay: 0.35, duration: 0.9, ease: EASE }}
      >
        <div className="portada__marco bisel bisel--lg">
          <motion.img
            src="/img/brand/mauricio-medina.jpg"
            alt="Mauricio Medina"
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.35, duration: 1.4, ease: EASE }}
          />
          <motion.span
            className="portada__cortina"
            aria-hidden="true"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
          />
          <span className="portada__velo" aria-hidden="true" />
          <figcaption className="portada__pie">Mendoza</figcaption>
        </div>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className={`portada__pixel portada__pixel--${i}`}
            aria-hidden="true"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.08, type: "spring", stiffness: 380, damping: 18 }}
          />
        ))}
      </motion.figure>
    </div>
  );
}
