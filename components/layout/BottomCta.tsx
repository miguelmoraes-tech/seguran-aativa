import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function BottomCta() {
  return (
    <section className="bg-primary">
      <div className="section-y-sm container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
            Pronto para regularizar sua empresa?
          </h3>
          <p className="mt-1 text-sm text-white/70">
            Atendimento rápido e personalizado para sua empresa.
          </p>
        </div>
        <Button variant="accent" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Fale Conosco
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
