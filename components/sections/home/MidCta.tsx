import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function MidCta() {
  return (
    <section className="section-y bg-primary">
      <div className="container text-center">
        <Badge variant="dark">Comece Agora</Badge>
        <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
          Sua empresa está em <span className="text-accent">conformidade</span>?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Solicite uma análise gratuita e descubra como a Segurança Ativa
          pode proteger sua empresa, seus colaboradores e sua tranquilidade
          jurídica.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button variant="accent" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Análise Gratuita
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
