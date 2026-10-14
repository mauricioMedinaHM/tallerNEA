import { MotionConfig } from "motion/react";
import { Presentation } from "./components/Presentation";
import { PromptPage } from "./pages/PromptPage";

export function App() {
  const isPrompt = window.location.pathname.replace(/\/+$/, "") === "/prompt";

  return <MotionConfig reducedMotion="user">{isPrompt ? <PromptPage /> : <Presentation />}</MotionConfig>;
}
