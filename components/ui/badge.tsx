import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  variant = "light",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider font-body",
        variant === "light"
          ? "bg-primary/10 text-primary"
          : "bg-white/10 text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
