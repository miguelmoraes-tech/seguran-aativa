import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function TreinamentosCta() {
  return (
    <section className="section-y-sm">
      <div className="container text-center">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">
          Precisa capacitar sua equipe?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Solicite um orçamento e receba um cronograma personalizado para os
          treinamentos da sua empresa.
        </p>
        <div className="mt-6">
          <Button variant="primary" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
