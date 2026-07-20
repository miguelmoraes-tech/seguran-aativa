import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const TESTIMONIALS = [
  {
    initials: "CE",
    name: "Carlos Eduardo",
    role: "Diretor Industrial — Construtora Horizonte",
    quote:
      "A Segurança Ativa organizou toda a nossa gestão de SST em menos de 30 dias. Profissionalismo e agilidade que nunca tivemos com outras empresas do setor.",
  },
  {
    initials: "AB",
    name: "Ana Beatriz",
    role: "Coordenadora de RH — Metalúrgica Precision",
    quote:
      "O atendimento é o grande diferencial. Sempre que precisamos de um laudo urgente ou temos dúvidas sobre eSocial, a resposta é imediata. Parceria de verdade.",
  },
  {
    initials: "RM",
    name: "Roberto Mendes",
    role: "Gerente de Operações — LogBH Transportes",
    quote:
      "Desde que contratamos a Segurança Ativa, zeramos nossas pendências junto ao Ministério do Trabalho. A organização da documentação é impecável.",
  },
];

export function Testimonials() {
  return (
    <section className="section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Confiança construída ao longo de 17 anos"
          description="O que nossos clientes dizem sobre a experiência de trabalhar com a Segurança Ativa."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/80">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
