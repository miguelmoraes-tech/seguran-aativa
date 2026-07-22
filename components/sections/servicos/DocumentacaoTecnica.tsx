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
    description: [
      "Identifica os perigos presentes no ambiente de trabalho",
      "Avalia e classifica os riscos ocupacionais",
      "Define medidas de prevenção e controle",
      "Monitora continuamente a eficácia das ações de segurança",
    ],
  },
  {
    icon: Activity,
    tag: "PCMSO",
    ref: "NR-07",
    title: "Programa de Controle Médico de Saúde Ocupacional",
    description: [
      "Monitora a saúde dos trabalhadores",
      "Define exames ocupacionais obrigatórios",
      "Previne doenças relacionadas ao trabalho",
      "Acompanha a aptidão física e mental dos empregados",
    ],
  },
  {
    icon: Shield,
    tag: "LTCAT",
    ref: "",
    title: "Laudo Técnico das Condições Ambientais do Trabalho",
    description: [
      "Avalia a exposição a agentes nocivos no ambiente de trabalho",
      "Caracteriza atividades especiais para fins previdenciários",
      "Serve de base para emissão do PPP",
      "Identifica agentes físicos, químicos e biológicos",
    ],
  },
  {
    icon: ClipboardCheck,
    tag: "AET",
    ref: "NR-17",
    title: "Análise Ergonômica do Trabalho / Fatores de Riscos Psicossociais",
    description: [
      "Avalia as condições ergonômicas das atividades",
      "Analisa postura, esforço físico e organização do trabalho",
      "Identifica os fatores de riscos psicossociais",
      "Propõe melhorias para reduzir a fadiga mental, física e prevenir lesões",
      "Adequa o trabalho às capacidades do trabalhador",
    ],
  },
  {
    icon: FileText,
    tag: "RAC",
    ref: "",
    title: "Requisitos de Atividades Críticas",
    description: [
      "Estabelece requisitos mínimos para execução de atividades críticas",
      "Define procedimentos de segurança para reduzir riscos e prevenir acidentes",
      "Exige planejamento, capacitação e controle operacional",
      "Contempla os seguintes Requisitos de Atividades Críticas:",
      "RAC 01 – Trabalhos em Altura",
      "RAC 02 – Veículos Automotores Leves",
      "RAC 03 – Operação de Equipamentos Móveis",
      "RAC 04 – Bloqueio, Identificação e Zero Energia (LOTO)",
      "RAC 05 – Içamento de Cargas",
      "RAC 06 – Trabalhos em Espaços Confinados",
      "RAC 07 – Proteção de Máquinas",
      "RAC 08 – Atividades no Terreno",
      "RAC 10 – Trabalhos com Eletricidade",
    ],
  },
  {
    icon: Shield,
    tag: "LIP",
    ref: "NR-15 / NR-16",
    title: "Laudo de Insalubridade e Periculosidade",
    description: [
      "Avalia a existência de atividades insalubres e perigosas",
      "Identifica agentes nocivos e situações de risco",
      "Determina o direito aos adicionais de insalubridade ou periculosidade",
      "Recomenda medidas para eliminar ou reduzir a exposição aos riscos",
    ],
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
                        {doc.ref && (
                          <span className="font-normal normal-case text-muted-foreground">
                            {doc.ref}
                          </span>
                        )}
                      </span>
                      <span className="block font-semibold text-foreground">
                        {doc.title}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12">
                  <ul className="space-y-2">
                    {doc.description.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
