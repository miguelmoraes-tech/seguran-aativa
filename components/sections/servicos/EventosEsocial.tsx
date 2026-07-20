import { Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const EVENTOS = [
  {
    code: "S-2210",
    title: "Comunicação de Acidente de Trabalho",
    description: "Registro obrigatório de CAT junto ao eSocial.",
  },
  {
    code: "S-2220",
    title: "Monitoramento da Saúde do Trabalhador",
    description: "Exames médicos e ASOs realizados.",
  },
  {
    code: "S-2240",
    title: "Condições Ambientais do Trabalho",
    description: "Agentes nocivos e fatores de risco identificados.",
  },
  {
    code: "S-2221",
    title: "Exame Toxicológico do Motorista",
    description: "Controle toxicológico para condutores profissionais.",
  },
];

export function EventosEsocial() {
  return (
    <section className="section-y bg-primary">
      <div className="container">
        <SectionHeader
          variant="dark"
          eyebrow="Gestão eSocial"
          title="Eventos SST sempre em dia"
          description="Envio e acompanhamento de todos os eventos obrigatórios de Saúde e Segurança do Trabalho no eSocial."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {EVENTOS.map((evento) => (
            <div
              key={evento.code}
              className="card-border-dark rounded-xl bg-white/5 p-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Send className="h-4 w-4" />
                {evento.code}
              </span>
              <h3 className="mt-3 font-heading text-base font-bold text-white">
                {evento.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                {evento.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
