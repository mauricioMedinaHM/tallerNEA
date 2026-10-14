import type { ComponentType } from "react";
import { Blockchain } from "./Blockchain";
import { Cover } from "./Cover";
import { DesignThinking } from "./DesignThinking";
import { GoodProblem } from "./GoodProblem";
import { Mentors } from "./Mentors";
import { Money } from "./Money";
import { OnePager } from "./OnePager";
import { OneVertical } from "./OneVertical";
import { Solution } from "./Solution";
import { Star } from "./Star";
import { WhoAmI } from "./WhoAmI";

export type SlideDef = {
  id: string;
  title: string;
  Component: ComponentType;
  /** Cuánto patrón de píxeles se ve en los bordes (0 a 1). */
  pixels: number;
};

export const slides: SlideDef[] = [
  { id: "portada", title: "Portada", Component: Cover, pixels: 0.6 },
  { id: "quien", title: "¿Quién soy?", Component: WhoAmI, pixels: 0.25 },
  { id: "frase", title: "Enamórense del problema", Component: Star, pixels: 0.85 },
  { id: "problema", title: "Un buen problema", Component: GoodProblem, pixels: 0.3 },
  { id: "vertical", title: "Una sola vertical", Component: OneVertical, pixels: 0.7 },
  { id: "design", title: "Design thinking", Component: DesignThinking, pixels: 0.3 },
  { id: "mentores", title: "Hablen con los mentores", Component: Mentors, pixels: 0.45 },
  { id: "solucion", title: "La solución", Component: Solution, pixels: 0.3 },
  { id: "blockchain", title: "Blockchain: 3 usos", Component: Blockchain, pixels: 0.3 },
  { id: "plata", title: "Costos y ganancias", Component: Money, pixels: 0.35 },
  { id: "hoja", title: "Su producto en una hoja", Component: OnePager, pixels: 0.4 },
];
