import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { slides } from "../slides";
import { CuyoLogo, NeaLogo } from "./brand";
import { PixelField } from "./PixelField";
import { PixelWipe } from "./PixelWipe";
import { EASE } from "./ease";
import "../styles/deck.css";
import "../styles/slides.css";

const LAST = slides.length - 1;
const NAV_LOCK_MS = 450;
const WHEEL_LOCK_MS = 750;
const SWIPE_PX = 60;
const IDLE_MS = 2600;

function indexFromHash() {
  const n = Number.parseInt(window.location.hash.replace("#", ""), 10);
  return Number.isFinite(n) ? Math.min(Math.max(n, 0), LAST) : 0;
}

function isInteractive(target: EventTarget | null) {
  return target instanceof Element && !!target.closest("a, button, input, textarea, [data-no-nav]");
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Presentation() {
  const [nav, setNav] = useState(() => ({ index: indexFromHash(), direction: 1 as 1 | -1, count: 0 }));
  const [idle, setIdle] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const navLock = useRef(0);
  const wheelLock = useRef(0);
  const pointer = useRef<{ x: number; y: number; id: number; onControl: boolean } | null>(null);

  const go = useCallback((target: number | ((current: number) => number)) => {
    const now = performance.now();
    if (now < navLock.current) return;
    setNav((s) => {
      const next = Math.min(Math.max(typeof target === "function" ? target(s.index) : target, 0), LAST);
      if (next === s.index) return s;
      navLock.current = now + NAV_LOCK_MS;
      return { index: next, direction: next > s.index ? 1 : -1, count: s.count + 1 };
    });
  }, []);

  const next = useCallback(() => go((i) => i + 1), [go]);
  const prev = useCallback(() => go((i) => i - 1), [go]);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.();
  }, []);

  useEffect(() => {
    history.replaceState(null, "", `#${nav.index}`);
  }, [nav.index]);

  useEffect(() => {
    const onHash = () => go(indexFromHash());
    const onFullscreen = () => setFullscreen(!!document.fullscreenElement);

    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target instanceof HTMLElement && e.target.matches("input, textarea")) return;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
        case "Enter":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
        case "Backspace":
          e.preventDefault();
          prev();
          break;
        case "Home":
          go(0);
          break;
        case "End":
          go(LAST);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
      }
    };

    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (now < wheelLock.current) {
        // La inercia del trackpad sigue mandando eventos: el bloqueo se estira hasta que paren.
        wheelLock.current = Math.max(wheelLock.current, now + 160);
        return;
      }
      if (Math.abs(delta) < 25) return;
      wheelLock.current = now + WHEEL_LOCK_MS;
      if (delta > 0) next();
      else prev();
    };

    window.addEventListener("hashchange", onHash);
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("fullscreenchange", onFullscreen);
    };
  }, [go, next, prev, toggleFullscreen]);

  useEffect(() => {
    let timer = window.setTimeout(() => setIdle(true), IDLE_MS);
    const wake = () => {
      setIdle(false);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setIdle(true), IDLE_MS);
    };
    window.addEventListener("pointermove", wake);
    window.addEventListener("pointerdown", wake);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", wake);
      window.removeEventListener("pointerdown", wake);
    };
  }, []);

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    pointer.current = { x: e.clientX, y: e.clientY, id: e.pointerId, onControl: isInteractive(e.target) };
  };

  const onPointerUp = (e: PointerEvent) => {
    const start = pointer.current;
    pointer.current = null;
    if (!start || start.id !== e.pointerId) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
      return;
    }
    if (!start.onControl && Math.hypot(dx, dy) < 8) {
      if (e.clientX < window.innerWidth * 0.2) prev();
      else next();
    }
  };

  const current = slides[nav.index];
  const Slide = current.Component;

  return (
    <div
      className={`deck ${idle ? "deck--idle" : ""}`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (pointer.current = null)}
    >
      <div className="trama" aria-hidden="true" />
      <PixelField intensity={current.pixels} />

      <header className="deck__header">
        <AnimatePresence>
          {nav.index > 0 && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <NeaLogo />
            </motion.div>
          )}
        </AnimatePresence>
        <CuyoLogo className="logo-cuyo--header" />
      </header>

      <main className="deck__stage" aria-live="polite">
        <AnimatePresence initial={false} custom={nav.direction}>
          <motion.section
            key={nav.index}
            className={`slide slide--${current.id}`}
            aria-label={`Slide ${nav.index}: ${current.title}`}
            custom={nav.direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, x: `${dir * 6}%`, filter: "blur(14px)" }),
              center: { opacity: 1, x: "0%", filter: "blur(0px)" },
              exit: (dir: number) => ({ opacity: 0, x: `${dir * -6}%`, filter: "blur(14px)" }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Slide />
          </motion.section>
        </AnimatePresence>
      </main>

      {nav.count > 0 && <PixelWipe key={nav.count} direction={nav.direction} seed={nav.count} />}

      <footer className="deck__footer">
        <nav className="deck__progreso" aria-label="Slides" data-no-nav>
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`deck__segmento ${i === nav.index ? "is-actual" : ""} ${i < nav.index ? "is-visto" : ""}`}
              onClick={() => go(i)}
              aria-label={`Ir a la slide ${i}: ${s.title}`}
              aria-current={i === nav.index ? "step" : undefined}
            />
          ))}
        </nav>
        <div className="deck__controles" data-no-nav>
          <span className="deck__contador">
            <b>{pad(nav.index)}</b> / {pad(LAST)}
          </span>
          <button type="button" className="deck__btn" onClick={prev} disabled={nav.index === 0} aria-label="Slide anterior">
            <ChevronLeft />
          </button>
          <button type="button" className="deck__btn" onClick={next} disabled={nav.index === LAST} aria-label="Slide siguiente">
            <ChevronRight />
          </button>
          <button
            type="button"
            className="deck__btn"
            onClick={toggleFullscreen}
            aria-label={fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {fullscreen ? <Minimize /> : <Maximize />}
          </button>
        </div>
      </footer>
    </div>
  );
}
