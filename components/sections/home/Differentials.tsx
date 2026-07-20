import { Clock, Users, FileCheck2, Headphones, BarChart3, Lock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const ITEMS = [
  {
    icon: Clock,
    title: "Agilidade",
    description:
      "Prazos rigorosos. Laudos, documentos e eventos eSocial entregues dentro do cronograma acordado.",
  },
  {
    icon: Users,
    title: "Atendimento Próximo",
    description:
      "Cada cliente tem um responsável técnico dedicado, garantindo comunicação direta e personalizada.",
  },
  {
    icon: FileCheck2,
    title: "Conformidade Total",
    description:
      "Gestão completa de SST alinhada às exigências legais vigentes, evitando multas e interdições.",
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description:
      "Assessoria permanente para dúvidas, atualizações normativas e demandas urgentes da sua empresa.",
  },
  {
    icon: BarChart3,
    title: "Organização",
    description:
      "Documentação organizada, processos padronizados e controle total do calendário ocupacional.",
  },
  {
    icon: Lock,
    title: "Segurança Jurídica",
    description:
      "Laudos assinados por engenheiros e médicos habilitados, com validade perante a fiscalização.",
  },
];

export function Differentials() {
  return (
    <section className="section-y bg-primary">
      <div className="container">
        <SectionHeader
          variant="dark"
          eyebrow="Por que nos escolher"
          title="Diferenciais que garantem resultados"
          description="Mais do que cumprir a legislação, construímos parcerias de longo prazo baseadas em competência técnica e confiança."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="card-border-dark rounded-xl bg-white/5 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
