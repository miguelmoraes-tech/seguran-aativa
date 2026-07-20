"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type Training = {
  code: string;
  title: string;
  img: string;
  description: string[] | null;
  fit?: "cover" | "contain";
  position?: string;
};

// Único ponto de ajuste do tamanho geral dos cards: como a proporção da
// imagem (aspect-[8/5]) permanece fixa, estreitar esta largura encolhe
// largura + altura de cada card na mesma proporção, sem alterar o
// enquadramento (object-fit/object-position) de nenhuma NR.
// Para reduzir ~10%: max-w-[860px] -> max-w-[774px].
const CATALOG_MAX_WIDTH = "max-w-[860px]";

const TRAININGS: Training[] = [
  {
    code: "NR-01",
    title: "Disposições Gerais",
    img: "/nr/nr1.webp",
    description: [
      "Regras básicas de segurança e saúde no trabalho",
      "Identificação e controle de riscos ocupacionais (PGR)",
      "Obrigatória para todas as empresas",
    ],
  },
  {
    code: "NR-05",
    title: "CIPA — Graus de Risco",
    img: "/nr/nr5.webp",
    description: [
      "Comissão de prevenção de acidentes e assédio",
      "Formada por representantes da empresa e dos trabalhadores",
      "Atua na identificação e prevenção de riscos",
    ],
  },
  {
    code: "NR-06",
    title: "Equipamentos de Proteção Individual",
    img: "/nr/nr6.png",
    // Banner reeditado (selo mais alto), mas ele ainda encosta perto do rodapé —
    // desloca o corte um pouco pra baixo pra garantir que o selo não seja cortado.
    position: "object-[center_75%]",
    description: [
      "Uso obrigatório de EPIs conforme o risco da função",
      "Empresa deve fornecer, treinar e fiscalizar o uso",
      "Reduz acidentes e doenças ocupacionais",
    ],
  },
  {
    code: "NR-10",
    title: "Segurança em Instalações Elétricas",
    img: "/nr/nr10.png",
    description: [
      "Segurança em instalações e serviços elétricos",
      "Válida para todas as fases: geração, transmissão e uso",
      "Reduz risco de choque e acidentes graves",
    ],
  },
  {
    code: "NR-11",
    title: "Transporte e Movimentação de Materiais",
    img: "/nr/nr11.webp",
    description: [
      "Uso seguro de empilhadeiras, guindastes e similares",
      "Regras de armazenagem e manuseio de cargas",
      "Capacitação obrigatória para operadores",
    ],
  },
  {
    code: "NR-12",
    title: "Segurança em Máquinas e Equipamentos",
    img: "/nr/nr12.png",
    // TODO: banner de origem traz sublinhas com texto incoerente ("Capando de Sarieia",
    // "Eafereresones") — parecem placeholder, foram omitidas. Confirmar copy real.
    description: [
      "Prevenção de acidentes com máquinas industriais",
      "Dispositivos de segurança e proteções obrigatórias",
      "Capacitação para operação segura",
    ],
  },
  {
    code: "NR-33",
    title: "Espaço Confinado",
    img: "/nr/nr33.png",
    // Banner reeditado numa proporção mais larga (não é mais quase quadrado) —
    // cabe inteiro com object-cover padrão, sem precisar de contain.
    description: [
      "Avaliação e controle de riscos em ambientes confinados",
      "Monitoramento da atmosfera antes da entrada",
      "Procedimentos de resgate em emergência",
    ],
  },
  {
    code: "NR-35",
    title: "Trabalho em Altura",
    img: "/nr/nr35.webp",
    // Selo "NR 35" e o texto "Trabalho em Altura" ficam colados na borda esquerda —
    // o corte aqui é horizontal (imagem mais larga que o card), não vertical.
    position: "object-left",
    description: [
      "Obrigatória para atividades acima de 2 metros",
      "Uso de EPIs específicos e ancoragem",
      "Planejamento e procedimentos de emergência",
    ],
  },
  // TODO: asset nr17.webp existe em /public/nr mas não aparece em nenhum
  // card visível nos prints — confirmar se falta um card "NR-17" no catálogo.
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
          description="Conheça todos os treinamentos disponíveis. Cada NR possui conteúdo programático específico e carga horária regulamentar."
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
                  className="card-border-light block w-full overflow-hidden rounded-2xl bg-card text-left"
                >
                  <div className="relative aspect-[8/5] w-full bg-primary-dark">
                    <Image
                      src={t.img}
                      alt={`Treinamento ${t.code}`}
                      fill
                      className={cn(
                        t.fit === "contain"
                          ? "object-contain p-3"
                          : "object-cover",
                        t.position ?? "object-top"
                      )}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-primary-dark/90 px-2 py-1 text-xs font-bold text-accent">
                      {t.code}
                    </span>
                    <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-primary">
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-heading text-sm font-bold">
                      {t.title}
                    </h3>
                  </div>
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
                      {t.description ? (
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
                      ) : (
                        <span className="italic text-muted-foreground/70">
                          TODO: descrição não disponível no material de
                          origem para este treinamento.
                        </span>
                      )}
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
