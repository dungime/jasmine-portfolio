import { useId, type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { label: string; textClassName?: string };

export function ScrollRing({ label, textClassName, ...props }: Props) {
  const pathId = useId();

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <defs>
        <path id={pathId} d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <text className={textClassName}>
        <textPath href={`#${pathId}`}>
          {label} • {label} • {label} • {label} •{" "}
        </textPath>
      </text>
    </svg>
  );
}
