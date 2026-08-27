"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Opacity-only: a `y` transform here would still be mid-animation when a nav
// link scrolls straight to this section (it's off-screen at click time, so
// whileInView hasn't fired yet), and the transform resolving afterward shifts
// the section's real position out from under the scroll that just landed.
const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export function Reveal({ children, delay = 0, className, id }: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
