import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

interface HeroEntranceProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function HeroEntrance({ children, className }: HeroEntranceProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
