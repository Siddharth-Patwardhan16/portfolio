import { type ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

interface RevealProps extends HTMLMotionProps<"div"> {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly y?: number;
  readonly once?: boolean;
  readonly className?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  once = true,
  className,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -6% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly stagger?: number;
  readonly delay?: number;
}

export function Stagger({ children, className, stagger = 0.08, delay = 0 }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
