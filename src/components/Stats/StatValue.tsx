"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface StatValueProps {
  value: string;
  className?: string;
}

const TICKS = 14;
const TICK_INTERVAL_MS = 60;

export function StatValue({ value, className }: StatValueProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const digits = match[1].length;

    let tick = 0;
    const interval = setInterval(() => {
      tick += 1;
      if (tick >= TICKS) {
        setDisplay(`${target}${suffix}`);
        clearInterval(interval);
        return;
      }
      setDisplay(`${Math.floor(Math.random() * 10 ** digits)}${suffix}`);
    }, TICK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
