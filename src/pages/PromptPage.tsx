import { motion } from "motion/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CuyoLogo, InstagramIcon, NeaLogo } from "../components/brand";
import { EASE } from "../components/ease";
import { Reveal } from "../components/Reveal";
import { extraLinks, promptIntro, promptParts, promptText, socials } from "../data/prompt";
import { meta } from "../data/slides";
import "../styles/prompt.css";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

function CopyButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onCopy = async () => {
    const ok = await copyText(promptText);
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <button type="button" className={`btn ${className}`} onClick={onCopy} aria-live="polite">
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {copied ? "¡Copiado!" : "Copiar prompt"}
    </button>
  );
}

export function PromptPage() {
  useEffect(() => {
    document.title = "Prompt para equipos · Ideathon NEA TECH 2026";
  }, []);

  return (
    <div className="prompt-page">
      <header className="pp-cabecera">
        <NeaLogo />
        <CuyoLogo className="logo-cuyo--chico" />
      </header>

      <main className="pp-main">
        <section className="pp-hero">
          <div className="trama" aria-hidden="true" />
          <Reveal delay={0.05}>
            <p className="etiqueta">Taller de producto · {meta.event}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="h1 pp-titulo">
              Tu idea en <span className="acento">4 partes</span>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="lead pp-lead">{promptIntro}</p>
          </Reveal>
        </section>

        <section className="pp-seccion" aria-labelledby="pp-redes-titulo">
          <p className="etiqueta">Seguinos</p>
          <h2 id="pp-redes-titulo" className="h2 pp-redes-titulo">
            Seguime. <span className="acento">Sigamos haciendo comunidad.</span>
          </h2>
          <div className="pp-redes">
            {socials.map((s) => (
              <a key={s.handle} className="pp-red bisel" href={s.url} target="_blank" rel="noopener noreferrer">
                <span className="pp-red__icono">
                  <InstagramIcon />
                </span>
                <span className="pp-red__datos">
                  <span className="pp-red__handle">@{s.handle}</span>
                  <span className="pp-red__nombre">{s.name}</span>
                  <span className="pp-red__texto">{s.text}</span>
                </span>
                <ArrowUpRight className="pp-red__flecha" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="pp-extra">
            {extraLinks.map((l) => (
              <a key={l.url} className="btn btn--fantasma" href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="pp-seccion" aria-labelledby="pp-prompt-titulo">
          <div className="pp-seccion__cabecera">
            <h2 id="pp-prompt-titulo" className="h2">
              El prompt
            </h2>
            <CopyButton />
          </div>
          <ol className="pp-partes">
            {promptParts.map((p, i) => (
              <li key={p.title} className="tarjeta pp-parte">
                <span className="num-contorno pp-parte__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pp-parte__titulo">{p.title}</span>
                <span className="pp-parte__texto">{p.text}</span>
              </li>
            ))}
          </ol>
          <motion.pre
            className="pp-prompt bisel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
          >
            {promptText}
          </motion.pre>
        </section>
      </main>

      <div className="franja-pixeles franja-pixeles--invertida" aria-hidden="true" />
      <footer className="pp-pie">
        <span>
          {meta.speaker} · {meta.event}
        </span>
        <span>Corrientes · 2026</span>
      </footer>
    </div>
  );
}
