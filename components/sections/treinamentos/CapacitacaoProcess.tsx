import { ClipboardList, Users, Award, FileCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Levantamento de Necessidades",
    description:
      "Analisamos o quadro de funcionários, riscos e exigências legais para determinar os treinamentos obrigatórios.",
  },
  {
    icon: Users,
    title: "Planejamento e Cronograma",
    description:
      "Organizamos turmas, datas e modalidade (presencial ou EAD) de acordo com a disponibilidade da empresa.",
  },
  {
    icon: Award,
    title: "Execução do Treinamento",
    description:
      "Instrutores habilitados ministram o conteúdo com material didático atualizado e carga horária regulamentar.",
  },
  {
    icon: FileCheck,
    title: "Certificação e Registro",
    description:
      "Emissão de certificados com validade legal, lista de presença e registro no sistema para controle de vencimento.",
  },
];

export function CapacitacaoProcess() {
  return (
    <section className="section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Processo"
          title="Como funciona a capacitação"
          description="Do levantamento de necessidades à certificação final, cuidamos de cada etapa."
        />

        <div className="mx-auto mt-8 max-w-2xl space-y-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Etapa 0{i + 1}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
