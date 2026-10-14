import type { SVGProps } from "react";

export function NeaIsotipo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 122" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M2 15 H62 L94 66 H74 V90 L26 115 V66 Z" />
        <path d="M98 5 H139 L156 39 V115 H125 L98 68 L108 66 V24 Z" />
        <path d="M184 15 H261 L247 66 H232 V115 L184 90 V66 H161 Z" />
      </g>
    </svg>
  );
}

export function NeaLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-nea ${className}`} aria-label="NEA TECH Corrientes 2026">
      <NeaIsotipo className="logo-nea__isotipo" />
      <span className="logo-nea__texto">
        <span className="logo-nea__marca">NEA TECH</span>
        <span className="logo-nea__sub">
          Corrientes <b>2026</b>
        </span>
      </span>
    </span>
  );
}

export function CuyoLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-cuyo ${className}`} aria-label="CuyoConnect">
      <img className="logo-cuyo__icono" src="/img/brand/cuyoconnect.svg" alt="" />
      <span className="logo-cuyo__texto">
        <span>Cuyo</span>
        <span>Connect</span>
      </span>
    </span>
  );
}

export function StellarMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.003 1.716c-1.37 0-2.7.27-3.948.78A10.18 10.18 0 0 0 2.66 7.901a10.136 10.136 0 0 0-.797 3.954c0 .258.01.516.027.775a1.942 1.942 0 0 1-1.055 1.88L0 14.934v1.902l2.463-1.26.072-.032v.005l.77-.39.758-.385.066-.039 14.807-7.56 1.666-.847 3.392-1.732V2.694L17.792 5.86 3.744 13.025l-.104.055-.017-.115a8.286 8.286 0 0 1-.071-1.105c0-2.255.88-4.377 2.474-5.977a8.462 8.462 0 0 1 2.71-1.82 8.513 8.513 0 0 1 3.2-.654h.067a8.41 8.41 0 0 1 4.09 1.055l1.628-.83.126-.066a10.11 10.11 0 0 0-5.845-1.853zM24 7.143 5.047 16.808l-1.666.847L0 19.382v1.902l3.282-1.671 2.91-1.485 14.058-7.153.105-.055.016.115c.05.369.072.743.072 1.11 0 2.255-.88 4.383-2.475 5.978a8.461 8.461 0 0 1-2.71 1.82 8.305 8.305 0 0 1-3.2.654h-.06c-1.441 0-2.86-.369-4.102-1.061l-.066.033-1.683.857c.594.418 1.232.776 1.903 1.062a10.11 10.11 0 0 0 3.947.797 10.09 10.09 0 0 0 7.17-2.975 10.136 10.136 0 0 0 2.969-7.18c0-.259-.005-.523-.027-.781a1.942 1.942 0 0 1 1.055-1.88L24 9.044z" />
    </svg>
  );
}

export function HederaMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm4.957 17.396h-1.581V14.01H8.622v3.378H7.05V6.604h1.581v3.384h6.754V6.604h1.581zm-1.581-6.259H8.622v1.724h6.754Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </svg>
  );
}
