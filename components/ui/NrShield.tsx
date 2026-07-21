import * as React from "react";
import { cn } from "@/lib/utils";

export function NrShield({
  nr,
  className,
}: {
  nr: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 120"
      role="img"
      aria-label={`Escudo NR-${nr}`}
      className={cn("h-full w-full", className)}
    >
      <path
        d="M50 4 L88 17 V52 C88 84 70 103 50 116 C30 103 12 84 12 52 V17 Z"
        className="fill-primary-dark stroke-accent transition-colors duration-300 group-hover:stroke-accent-light"
        strokeWidth={6}
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="46"
        textAnchor="middle"
        className="fill-white"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "17px",
          letterSpacing: "0.06em",
        }}
      >
        NR
      </text>
      <text
        x="50"
        y="84"
        textAnchor="middle"
        className="fill-accent-light"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "38px",
        }}
      >
        {nr}
      </text>
    </svg>
  );
}
