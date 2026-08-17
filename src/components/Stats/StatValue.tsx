"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface StatValueProps {
  value: string;
  className?: string;
}

const DURATION_MS = 1200;

function easeOutQuad(t: number) {
  return t * (2 - t);
}

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
    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / DURATION_MS, 1);
      const current = Math.round(easeOutQuad(progress) * target);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
