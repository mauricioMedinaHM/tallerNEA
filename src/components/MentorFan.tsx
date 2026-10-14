import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { mentorPhotos } from "../data/slides";
import { EASE } from "./ease";

const AUTOPLAY_MS = 3000;
const N = mentorPhotos.length;
const HALF = Math.floor(N / 2);

/** Posición relativa de una carta respecto de la activa, en [-HALF, HALF]. */
function offsetOf(index: number, active: number) {
  let k = index - active;
  if (k > HALF) k -= N;
  if (k < -HALF) k += N;
  return k;
}

/** Abanico de fotos: la activa al frente y el resto abierto como cartas. */
export function MentorFan() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1400);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % N), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [ready, active]);

  const photo = mentorPhotos[active];

  return (
    <div className="abanico">
      <div className="abanico__mesa">
        {mentorPhotos.map((p, i) => {
          const k = offsetOf(i, active);
          const abs = Math.abs(k);
          const isActive = k === 0;
          return (
            <motion.button
              key={p.src}
              type="button"
              className={`abanico__carta ${isActive ? "is-activa" : ""}`}
              style={{ zIndex: 20 - abs }}
              onClick={() => setActive(i)}
              aria-label={`${p.caption} · ${p.tag}`}
              aria-pressed={isActive}
              initial={{ opacity: 0, x: "0rem", y: "18rem", rotate: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                x: `${k * 5.6}rem`,
                y: `${isActive ? -1.6 : abs * 1.1}rem`,
                rotate: k * 8.5,
                scale: isActive ? 1.16 : 1 - abs * 0.07,
              }}
              transition={
                ready
                  ? { type: "spring", stiffness: 170, damping: 22 }
                  : { delay: 0.35 + (HALF - abs) * 0.12, type: "spring", stiffness: 120, damping: 17 }
              }
            >
              <span className="abanico__foto bisel">
                <img src={p.src} alt="" style={{ objectPosition: p.position }} draggable={false} />
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="abanico__pie" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="abanico__leyenda"
            initial={{ opacity: 0, y: "0.8em" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-0.8em" }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <span className="chip">{photo.tag}</span>
            <span className="abanico__titulo">{photo.caption}</span>
          </motion.div>
        </AnimatePresence>
        <div className="abanico__puntos">
          {mentorPhotos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              className={i === active ? "is-activo" : ""}
              onClick={() => setActive(i)}
              aria-label={`Ver foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
