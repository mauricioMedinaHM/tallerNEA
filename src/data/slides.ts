import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Blocks,
  Brain,
  Building2,
  ChartColumn,
  CircleDollarSign,
  Laptop,
  Lightbulb,
  Link2,
  MapPin,
  MessagesSquare,
  PenTool,
  Repeat,
  ScanSearch,
  Server,
  Sprout,
  Target,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { HederaMark, StellarMark } from "../components/brand";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  text?: string;
};

export const meta = {
  title: "Del problema real a un producto viable",
  speaker: "Mauricio Medina",
  role: "Desarrollador Web3 e IA · Cofundador de CuyoConnect",
  event: "Ideathon NEA TECH 2026",
  date: "Jueves 15 de octubre",
  venue: "MACC · Corrientes",
  instagram: "mauri.h.m",
  cuyoInstagram: "cuyoconnect",
};

export const whoAmI = {
  title: "¿Quién soy?",
  items: [
    {
      icon: Users,
      title: "Cofundador de CuyoConnect",
      text: "Comunidad tech de Mendoza",
    },
    {
      icon: MapPin,
      title: "Mentor en hackatones",
      text: "Perú · Salta · Mendoza",
    },
    {
      icon: Blocks,
      title: "Ecosistemas",
      text: "Ethereum · Stellar · Solana · Monad",
    },
    {
      icon: Target,
      title: "Hoy",
      text: "Cómo armar un producto",
    },
  ] satisfies IconItem[],
  community: "~700",
  communityLabel: "personas en CuyoConnect",
  ecosystems: ["Ethereum", "Stellar", "Solana", "Monad"],
};

export const mentorPhotos = [
  { src: "/img/mentor/mentor-1.webp", caption: "Stellar Odyssey Perú", tag: "Mentor oficial", position: "50% 40%" },
  { src: "/img/mentor/mentor-2.webp", caption: "EthLima Hackathon 2026", tag: "Mentor", position: "50% 45%" },
  { src: "/img/mentor/mentor-3.webp", caption: "Puna Tech 2026 · Salta", tag: "Speaker", position: "50% 40%" },
  { src: "/img/mentor/mentor-6.webp", caption: "CuyoConnect · Mendoza", tag: "Impacta Bootcamp", position: "22% 50%" },
  { src: "/img/mentor/mentor-5.webp", caption: "Metropolis", tag: "Mentores", position: "50% 50%" },
  { src: "/img/mentor/mentor-4.webp", caption: "Una blockchain para el mundo real", tag: "Charla Stellar", position: "62% 50%" },
  { src: "/img/mentor/mentor-7.webp", caption: "Stellar Week Buenos Aires 2025", tag: "Track winner", position: "50% 45%" },
];

export const star = {
  lineA: ["Enamórense", "del", "problema,"],
  lineB: ["no", "de", "la", "solución."],
};

export const goodProblem = {
  title: "Un buen problema es...",
  items: [
    { icon: Users, title: "Lo tiene mucha gente" },
    { icon: ChartColumn, title: "Está validado", text: "datos, estudios" },
    { icon: MapPin, title: "Está en su entorno" },
    { icon: CircleDollarSign, title: "Hay demanda", text: "y alguien pagaría por resolverlo" },
  ] satisfies IconItem[],
};

export const vertical = {
  label: "Recomendación de regalo",
  title: "Una sola vertical.",
  options: [
    { icon: StellarMark, title: "Stellar" },
    { icon: HederaMark, title: "Hedera" },
    { icon: Sprout, title: "Agro" },
  ] satisfies { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string }[],
  quoteA: "No gana el que más tecnología usa.",
  quoteB: "Gana el mejor producto.",
};

export const designThinking = {
  title: "Design thinking, versión ideathon",
  steps: [
    { icon: MessagesSquare, title: "Empatizar", text: "Hablen con quien tiene el dolor" },
    { icon: Brain, title: "Definir", text: "El problema en una frase" },
    { icon: Lightbulb, title: "Idear", text: "10 min de ideas y eligen una" },
    { icon: PenTool, title: "Prototipar", text: "Una sola funcionalidad central" },
    { icon: UserCheck, title: "Probar", text: "¿Lo entienden? ¿Les da confianza?" },
  ] satisfies IconItem[],
};

export const mentors = {
  title: "Hablen con los mentores",
  bubbles: [
    "Este es mi problema. Pensé esta solución. ¿Voy bien?",
    "¿Cómo aplico Stellar / Hedera a esto?",
  ],
  closingA: "No te dan el proyecto.",
  closingB: "Te dan la dirección.",
};

export const solution = {
  title: "La solución: ¿qué necesita?",
  needs: [
    { icon: Laptop, title: "Software" },
    { icon: Truck, title: "Logística" },
    { icon: Link2, title: "Blockchain" },
  ] satisfies IconItem[],
  questions: ["¿Cómo lo resuelven hoy?", "¿Qué tiene de malo?"],
  warningTitle: "Ojo con la sobreingeniería",
  warningText: "Lo simple que funciona le gana a lo complejo a medio hacer.",
};

export const blockchain = {
  title: "Blockchain: 3 usos para buscar problemas",
  uses: [
    { icon: Building2, title: "Tokenizar", text: "Dividir un activo en partes: el token es la escritura" },
    { icon: ScanSearch, title: "Trazabilidad", text: "Registros que nadie puede modificar" },
    { icon: Banknote, title: "Pagos", text: "Transfronterizos, rápidos, casi sin comisiones" },
  ] satisfies IconItem[],
  onChain: ["Firmas", "Transferencias", "Hashes"],
  offChain: ["Backend", "Datos", "KYC", "Logística"],
};

export const money = {
  title: "¿Cómo ganás plata?",
  items: [
    { icon: Truck, title: "¿Solo software o necesito terceros?", text: "Transporte, logística" },
    { icon: Server, title: "Todo cuesta", text: "Servidores, envíos, cada transacción" },
    { icon: Repeat, title: "Modelo de negocio", text: "Cómo entra la plata" },
  ] satisfies IconItem[],
  models: ["Comisión", "Suscripción", "Por uso"],
  closing: "Rentable, sin matar al usuario.",
};

export const onePager = {
  title: "Su producto en una hoja",
  rows: [
    { title: "Problema", text: "Quién, cuándo le duele, qué hace hoy" },
    { title: "Solución", text: "La única cosa que muestran" },
    { title: "Costos y ganancias", text: "Cuánto cuesta y quién paga" },
    { title: "Blockchain", text: "Sí / no y por qué (qué va on-chain)" },
  ],
  followTitle: "Seguime.",
  followText: "Sigamos haciendo comunidad.",
  qrLabel: "Escaneen: prompt para su equipo",
  closing: "¿A quién se lo mostrarían el lunes?",
};
