import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageFade() {
  const location = useLocation();
  const outlet = useOutlet();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{outlet}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
