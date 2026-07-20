import { MessageCircle, Search, FileText, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Contato Inicial",
    description:
      "Você entra em contato, apresenta a necessidade da sua empresa e nós entendemos o cenário completo.",
  },
  {
    icon: Search,
    title: "Diagnóstico Técnico",
    description:
      "Realizamos uma análise detalhada das obrigações legais, riscos e necessidades específicas do seu segmento.",
  },
  {
    icon: FileText,
    title: "Proposta Personalizada",
    description:
      "Apresentamos um plano de ação completo com escopo, cronograma e investimento definidos de forma clara.",
  },
  {
    icon: Rocket,
    title: "Execução e Acompanhamento",
    description:
      "Iniciamos a execução dos serviços com acompanhamento contínuo, relatórios e suporte dedicado.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Como funciona"
          title="Do primeiro contato à conformidade total"
          description="Um processo claro, organizado e sem burocracia para que sua empresa esteja regularizada o mais rápido possível."
        />

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="card-border-light relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-card text-primary">
                <step.icon className="h-6 w-6" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-base font-bold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
