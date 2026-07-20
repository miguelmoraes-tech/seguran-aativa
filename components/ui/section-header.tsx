import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  variant = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <Badge variant={variant}>{eyebrow}</Badge>
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-bold sm:text-4xl",
          variant === "dark" ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3",
            variant === "dark" ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
