import { FileText, Activity, Shield, ClipboardCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DOCS = [
  {
    icon: FileText,
    tag: "PGR",
    ref: "NR-01 / NR-09",
    title: "Programa de Gerenciamento de Riscos",
    description:
      "Identificação, avaliação e controle dos riscos ocupacionais conforme NR-01, garantindo conformidade e segurança no ambiente de trabalho.",
  },
  {
    icon: Activity,
    tag: "PCMSO",
    ref: "NR-07",
    title: "Programa de Controle Médico de Saúde Ocupacional",
    description:
      "Monitoramento da saúde dos trabalhadores por meio de exames admissionais, periódicos e demissionais de acordo com a legislação vigente.",
  },
  {
    icon: Shield,
    tag: "LTCAT",
    ref: "Lei 8.213/91",
    title: "Laudo Técnico de Condições Ambientais do Trabalho",
    description:
      "Avaliação das condições ambientais de trabalho para fins previdenciários, com medições técnicas e análise de agentes nocivos.",
  },
  {
    icon: ClipboardCheck,
    tag: "AET",
    ref: "NR-17",
    title: "Análise Ergonômica do Trabalho",
    // TODO: descrição não estava visível no print (item fechado no acordeão) — preencher com o texto real.
    description:
      "TODO: descrição não visível no print (item fechado no acordeão).",
  },
  {
    icon: FileText,
    tag: "RAC",
    ref: "NR-05",
    title: "Relatório Anual do CIPA",
    // TODO: descrição não estava visível no print (item fechado no acordeão).
    description:
      "TODO: descrição não visível no print (item fechado no acordeão).",
  },
  {
    icon: Shield,
    tag: "LIP",
    ref: "NR-15 / NR-16",
    title: "Laudo de Insalubridade e Periculosidade",
    // TODO: descrição não estava visível no print (item fechado no acordeão).
    description:
      "TODO: descrição não visível no print (item fechado no acordeão).",
  },
];

export function DocumentacaoTecnica() {
  return (
    <section id="servicos" className="section-anchor section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Programas & Laudos"
          title="Documentação técnica essencial"
          description="Cada programa é elaborado sob medida para a realidade da sua empresa, por profissionais habilitados e com registro no CREA-MG."
        />

        <div className="card-border-light mx-auto mt-8 max-w-3xl rounded-2xl bg-card px-6">
          <Accordion type="single" collapsible>
            {DOCS.map((doc, i) => (
              <AccordionItem key={doc.tag} value={`doc-${i}`}>
                <AccordionTrigger>
                  <span className="flex items-center gap-3 text-left">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <doc.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                        {doc.tag}
                        <span className="font-normal normal-case text-muted-foreground">
                          {doc.ref}
                        </span>
                      </span>
                      <span className="block font-semibold text-foreground">
                        {doc.title}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12">
                  {doc.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
