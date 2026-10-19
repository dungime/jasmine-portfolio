"use client";

import { useEffect, useRef, useState } from "react";

// Wave shape, in px — long, gentle swells matching the career timeline's
// curved connectors. The wavelength is stretched slightly so a whole number
// of waves fits the perimeter and the outline closes without a seam.
const AMPLITUDE = 5;
const WAVELENGTH = 320;
const RADIUS = 28;
const SAMPLE_STEP = 2;

type Point = { x: number; y: number; nx: number; ny: number };

/**
 * Point on a rounded rectangle's outline at distance `s` along it (clockwise
 * from the top-left, after the corner), plus the outward normal there.
 */
function pointOnRoundedRect(s: number, w: number, h: number, r: number): Point {
  const straightW = w - 2 * r;
  const straightH = h - 2 * r;
  const arc = (Math.PI / 2) * r;

  const corner = (cx: number, cy: number, startAngle: number, t: number): Point => {
    const angle = startAngle + (t / arc) * (Math.PI / 2);
    const nx = Math.cos(angle);
    const ny = Math.sin(angle);
    return { x: cx + r * nx, y: cy + r * ny, nx, ny };
  };

  if (s < straightW) return { x: r + s, y: 0, nx: 0, ny: -1 };
  s -= straightW;
  if (s < arc) return corner(w - r, r, -Math.PI / 2, s);
  s -= arc;
  if (s < straightH) return { x: w, y: r + s, nx: 1, ny: 0 };
  s -= straightH;
  if (s < arc) return corner(w - r, h - r, 0, s);
  s -= arc;
  if (s < straightW) return { x: w - r - s, y: h, nx: 0, ny: 1 };
  s -= straightW;
  if (s < arc) return corner(r, h - r, Math.PI / 2, s);
  s -= arc;
  if (s < straightH) return { x: 0, y: h - r - s, nx: -1, ny: 0 };
  s -= straightH;
  return corner(r, r, Math.PI, Math.min(s, arc));
}

function buildWavyPath(w: number, h: number) {
  const r = Math.min(RADIUS, w / 2, h / 2);
  const perimeter = 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r;
  const waves = Math.max(1, Math.round(perimeter / WAVELENGTH));
  const wavelength = perimeter / waves;

  const points: string[] = [];
  for (let s = 0; s < perimeter; s += SAMPLE_STEP) {
    const p = pointOnRoundedRect(s, w, h, r);
    const offset = AMPLITUDE * Math.sin((2 * Math.PI * s) / wavelength);
    points.push(`${(p.x + p.nx * offset).toFixed(1)} ${(p.y + p.ny * offset).toFixed(1)}`);
  }

  return `M${points.join("L")}Z`;
}

/**
 * Wavy outline drawn around its positioned parent. Re-measures on resize so
 * the waves stay evenly spaced at any width.
 */
export function WavyBorder({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: width, h: height });
    });
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={svgRef} className={className} aria-hidden="true">
      {size && size.w > 0 && size.h > 0 && <path d={buildWavyPath(size.w, size.h)} />}
    </svg>
  );
}
