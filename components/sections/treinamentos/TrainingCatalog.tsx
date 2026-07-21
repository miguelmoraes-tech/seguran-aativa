"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { NrShield } from "@/components/ui/NrShield";
import { cn } from "@/lib/utils";

type Training = {
  code: string;
  nr: string;
  title: string;
  description: string[];
};

// Único ponto de ajuste da largura geral do catálogo (grid de 2 colunas).
const CATALOG_MAX_WIDTH = "max-w-[860px]";

const TRAININGS: Training[] = [
  {
    code: "NR-01",
    nr: "01",
    title: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais (GRO)",
    description: [
      "Estabelece as diretrizes gerais das Normas Regulamentadoras",
      "Define as responsabilidades de empregadores e trabalhadores",
      "Determina a implementação do Programa de Gerenciamento de Riscos (PGR)",
      "Orienta a identificação, avaliação e controle dos riscos ocupacionais",
    ],
  },
  {
    code: "NR-05",
    nr: "05",
    title: "Comissão Interna de Prevenção de Acidentes e Assédio (CIPA)",
    description: [
      "Regulamenta a criação e funcionamento da CIPA",
      "Promove a prevenção de acidentes e doenças ocupacionais",
      "Incentiva ações de saúde e segurança no trabalho",
      "Atua na prevenção e combate ao assédio no ambiente de trabalho",
    ],
  },
  {
    code: "NR-06",
    nr: "06",
    title: "Equipamentos de Proteção Individual (EPI)",
    description: [
      "Define os requisitos para fornecimento de EPIs",
      "Estabelece a obrigatoriedade do uso correto dos equipamentos",
      "Determina responsabilidades do empregador e do trabalhador",
      "Regulamenta manutenção, substituição e conservação dos EPIs",
    ],
  },
  {
    code: "NR-10",
    nr: "10",
    title: "Segurança em Instalações e Serviços em Eletricidade",
    description: [
      "Estabelece medidas de segurança para trabalhos com eletricidade",
      "Previne choques elétricos, incêndios e explosões",
      "Exige capacitação dos trabalhadores",
      "Determina medidas de proteção coletiva e individual",
    ],
  },
  {
    code: "NR-11",
    nr: "11",
    title: "Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
    description: [
      "Regulamenta a movimentação e armazenamento de cargas",
      "Define requisitos para operação de empilhadeiras e equipamentos",
      "Estabelece medidas para prevenção de acidentes",
      "Organiza procedimentos para transporte seguro de materiais",
    ],
  },
  {
    code: "NR-12",
    nr: "12",
    title: "Segurança no Trabalho em Máquinas e Equipamentos",
    description: [
      "Define requisitos de segurança para máquinas e equipamentos",
      "Exige proteções físicas e dispositivos de emergência",
      "Regulamenta instalação, operação e manutenção",
      "Busca reduzir acidentes envolvendo máquinas",
    ],
  },
  {
    code: "NR-18",
    nr: "18",
    title: "Segurança e Saúde no Trabalho na Indústria da Construção",
    description: [
      "Estabelece medidas de segurança para obras",
      "Regulamenta proteção contra quedas e soterramentos",
      "Define requisitos para canteiros de obras",
      "Promove a prevenção de acidentes na construção civil",
    ],
  },
  {
    code: "NR-20",
    nr: "20",
    title: "Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
    description: [
      "Regulamenta atividades com inflamáveis e combustíveis",
      "Define critérios para armazenamento e manuseio",
      "Exige treinamentos específicos conforme o grau de risco",
      "Estabelece planos de prevenção e resposta a emergências",
    ],
  },
  {
    code: "NR-22",
    nr: "22",
    title: "Segurança e Saúde Ocupacional na Mineração",
    description: [
      "Regulamenta a segurança nas atividades de mineração",
      "Controla riscos de explosões, poeiras e desmoronamentos",
      "Exige ventilação e monitoramento das minas",
      "Define procedimentos para emergências",
    ],
  },
  {
    code: "NR-32",
    nr: "32",
    title: "Segurança e Saúde no Trabalho em Serviços de Saúde",
    description: [
      "Protege trabalhadores dos serviços de saúde",
      "Controla riscos biológicos, químicos e físicos",
      "Regulamenta o descarte de resíduos hospitalares",
      "Estabelece medidas para prevenção de acidentes com perfurocortantes",
    ],
  },
  {
    code: "NR-33",
    nr: "33",
    title: "Segurança e Saúde nos Trabalhos em Espaços Confinados",
    description: [
      "Regulamenta trabalhos em espaços confinados",
      "Exige Permissão de Entrada e Trabalho (PET)",
      "Determina monitoramento da atmosfera",
      "Estabelece capacitação e equipe de resgate",
    ],
  },
  {
    code: "NR-35",
    nr: "35",
    title: "Trabalho em Altura",
    description: [
      "Aplica-se a atividades realizadas acima de 2 metros",
      "Exige análise de riscos e planejamento",
      "Regulamenta sistemas de proteção contra quedas",
      "Determina treinamento obrigatório para os trabalhadores",
    ],
  },
];

export function TrainingCatalog() {
  const [openCodes, setOpenCodes] = React.useState<Set<string>>(new Set());

  function toggle(code: string) {
    setOpenCodes((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  }

  return (
    <section className="section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Normas Regulamentadoras"
          title="Catálogo de treinamentos"
          description="Conheça alguns dos nossos treinamentos disponíveis. Cada NR possui conteúdo programático específico e carga horária regulamentar."
        />

        <div
          className={cn(
            "mx-auto mt-8 grid grid-cols-1 gap-4 md:grid-cols-2",
            CATALOG_MAX_WIDTH
          )}
        >
          {TRAININGS.map((t) => {
            const isOpen = openCodes.has(t.code);
            return (
              <div key={t.code} className="relative">
                <button
                  type="button"
                  onClick={() => toggle(t.code)}
                  aria-expanded={isOpen}
                  className="card-border-light group relative flex w-full items-center gap-4 rounded-2xl bg-card p-4 pr-12 text-left"
                >
                  <div className="h-16 w-16 shrink-0">
                    <NrShield nr={t.nr} />
                  </div>
                  <h3 className="font-heading text-sm font-bold leading-snug">
                    {t.code} — {t.title}
                  </h3>
                  <span className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </span>
                </button>

                {/* Painel em overlay: não ocupa espaço no grid, só sobrepõe o que estiver abaixo. */}
                <div
                  className={cn(
                    "absolute inset-x-0 top-full z-20 grid transition-all duration-300 ease-out",
                    isOpen
                      ? "mt-2 grid-rows-[1fr] opacity-100"
                      : "pointer-events-none mt-0 grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="card-border-light rounded-2xl bg-card p-4 text-sm text-muted-foreground shadow-xl">
                      <ul className="space-y-2">
                        {t.description.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
