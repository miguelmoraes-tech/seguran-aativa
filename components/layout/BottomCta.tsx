import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function BottomCta({
  variant = "green",
}: {
  variant?: "green" | "light" | "footer";
}) {
  const isLight = variant === "light";
  const isFooter = variant === "footer";

  return (
    <section
      className={cn(
        variant === "green" && "bg-primary",
        isFooter && "bg-night"
      )}
    >
      <div className="section-y-sm container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h3
            className={cn(
              "font-heading text-xl font-bold sm:text-2xl",
              isLight ? "text-foreground" : "text-white"
            )}
          >
            Pronto para regularizar sua empresa?
          </h3>
          <p
            className={cn(
              "mt-1 text-sm",
              isLight ? "text-muted-foreground" : "text-white/70"
            )}
          >
            Atendimento rápido e personalizado para sua empresa.
          </p>
        </div>
        <Button variant={isLight ? "primary" : "accent"} size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Fale Conosco
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
