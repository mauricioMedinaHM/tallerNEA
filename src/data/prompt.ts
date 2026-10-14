export const promptIntro =
  "Copiá este prompt, pegalo en ChatGPT, Gemini o la IA que uses y contale tu idea.";

export const promptParts = [
  { title: "Problema", text: "Quién lo sufre, cuándo le duele y qué hace hoy." },
  { title: "Solución", text: "La única funcionalidad central de la demo." },
  { title: "Costos y ganancias", text: "Cuánto cuesta, quién paga y cómo se gana plata." },
  { title: "Blockchain sí / no", text: "Si hace falta y qué va on-chain y off-chain." },
];

export const promptText = `Actuá como mentor de producto en la Ideathon NEA Tech 2026. Mi equipo tiene una idea para uno de los escenarios (ganadería, yerba mate o cascarilla de arroz). Tu trabajo es ayudarnos a pensar, NO darnos la solución hecha.

Primero, dividí nuestra idea en 4 partes y mostranos qué entendiste de cada una:
1. PROBLEMA: quién lo sufre, en qué momento le duele, qué hace hoy para resolverlo y cuánto le cuesta.
2. SOLUCIÓN: qué cambia para esa persona y cuál es la única funcionalidad central que mostraríamos en la demo.
3. COSTOS Y GANANCIAS: cuánto cuesta mantenerlo, quién paga y cómo ganamos plata sin matar al usuario.
4. BLOCKCHAIN SÍ / NO: si realmente hace falta y qué va on-chain y qué va off-chain.

Después, haceme de 2 a 3 preguntas por cada parte, de a una parte por vez, empezando por el PROBLEMA. Esperá mis respuestas antes de seguir. Si algo está flojo o es vago, decímelo directo.

Tené en cuenta cómo evalúa el jurado:
- Resolución del problema 25, Innovación 25, Prototipo 20, Impacto 20, Factibilidad 10.
- Blockchain, tokenización o IA NO suman puntos por sí solos.
- Conviene enfocarse en una sola vertical y una sola parte del problema.

En la parte 4 preguntame siempre: "¿Esto se resuelve con una planilla y WhatsApp? Si no, ¿por qué no?". La blockchain conviene cuando se mueve plata o derechos, hace falta trazabilidad o un registro que nadie pueda modificar, o los actores no confían entre sí.

Solo cuando hayamos respondido todo, dame:
- 3 ideas para mejorar la solución.
- Los puntos débiles que el jurado nos va a preguntar.
- Un resumen de nuestro producto en 4 líneas (una por parte), listo para el pitch.

Nuestra idea es: [PEGÁ ACÁ TU IDEA]`;

export const socials = [
  {
    handle: "mauri.h.m",
    name: "Mauricio Medina",
    text: "¿Querés que revise tu idea o más material? Seguime y escribime.",
    url: "https://www.instagram.com/mauri.h.m/",
  },
  {
    handle: "cuyoconnect",
    name: "CuyoConnect",
    text: "La comunidad tech de Mendoza y Cuyo: eventos, hackatones y builders.",
    url: "https://www.instagram.com/cuyoconnect/",
  },
];

export const extraLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/mauricio-medina-dev/" },
  { label: "Portfolio", url: "https://portafolio-mauricio-medina.vercel.app/" },
];
