import * as React from "react";
import { cn } from "@/lib/utils";

export function NrShield({
  nr,
  className,
}: {
  nr: string;
  className?: string;
}) {
  const gradientId = React.useId();

  return (
    <svg
      viewBox="0 0 100 120"
      role="img"
      aria-label={`Escudo NR-${nr}`}
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#155641" />
          <stop offset="100%" stopColor="#0A2B21" />
        </linearGradient>
      </defs>

      <path
        d="M50 3
           C63 3 75 7.5 87 14.5
           V53
           C87 85 69.5 103.5 50 117
           C30.5 103.5 13 85 13 53
           V14.5
           C25 7.5 37 3 50 3
           Z"
        fill={`url(#${gradientId})`}
        className="stroke-accent transition-colors duration-300 group-hover:stroke-accent-light"
        strokeWidth={2.5}
        strokeLinejoin="round"
      />

      <path
        d="M50 3
           C63 3 75 7.5 87 14.5
           V53
           C87 85 69.5 103.5 50 117
           C30.5 103.5 13 85 13 53
           V14.5
           C25 7.5 37 3 50 3
           Z"
        fill="none"
        className="stroke-accent/40 transition-colors duration-300 group-hover:stroke-accent-light/50"
        strokeWidth={1}
        transform="translate(50 60) scale(0.9) translate(-50 -60)"
      />

      <text
        x="50"
        y="34"
        textAnchor="middle"
        className="fill-white/90"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          fontSize: "15px",
          letterSpacing: "0.2em",
        }}
      >
        NR
      </text>

      <line
        x1="32"
        y1="43"
        x2="68"
        y2="43"
        className="stroke-accent/50"
        strokeWidth={1}
      />

      <text
        x="50"
        y="88"
        textAnchor="middle"
        className="fill-accent-light"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "31px",
        }}
      >
        {nr}
      </text>
    </svg>
  );
}
