import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function ServicosCta() {
  return (
    <section className="section-y-sm bg-primary">
      <div className="container text-center">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Precisa de um ou mais serviços?
        </h2>
        <p className="mt-2 text-white/70">
          Montamos um pacote personalizado para a sua empresa.
        </p>
        <div className="mt-6">
          <Button
            variant="accent"
            size="lg"
            className="animate-float"
            asChild
          >
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
