import {
  ArrowRight,
  FileText,
  Activity,
  Shield,
  ClipboardList,
  Stethoscope,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const SERVICES = [
  {
    icon: FileText,
    tag: "PGR",
    caption: "Programa de Gerenciamento de Riscos",
    description:
      "Identificação, avaliação e controle dos riscos ocupacionais conforme NR-01, garantindo conformidade e segurança no ambiente de trabalho.",
  },
  {
    icon: Activity,
    tag: "PCMSO",
    caption: "Programa de Controle Médico",
    description:
      "Monitoramento da saúde dos trabalhadores com exames admissionais, periódicos e demissionais de acordo com a legislação vigente.",
  },
  {
    icon: Shield,
    tag: "LTCAT",
    caption: "Laudo Técnico de Condições Ambientais",
    description:
      "Avaliação das condições ambientais de trabalho para fins previdenciários, com medições técnicas e análise de agentes nocivos.",
  },
  {
    icon: ClipboardList,
    tag: "Gestão eSocial",
    caption: "Eventos SST",
    description:
      "Envio completo dos eventos S-2210, S-2220, S-2240 e S-2221 ao eSocial, mantendo sua empresa em conformidade total.",
  },
  {
    icon: Stethoscope,
    tag: "Exames Ocupacionais",
    caption: "ASO e complementares",
    description:
      "Audiometria, espirometria, ECG, EEG, acuidade visual, raio-X e exames laboratoriais com emissão imediata de ASO.",
  },
  {
    icon: GraduationCap,
    tag: "Treinamentos NR",
    caption: "Capacitação profissional",
    description:
      "Formação e reciclagem nas principais normas regulamentadoras: NR-01, NR-05, NR-06, NR-10, NR-11, NR-12, NR-33 e NR-35.",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Soluções Completas"
          title="Engenharia e Medicina Ocupacional integradas"
          description="Oferecemos todos os serviços que sua empresa precisa para operar em total conformidade com a legislação trabalhista e previdenciária."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.tag}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold">
                {service.tag}{" "}
                <span className="font-body text-xs font-normal uppercase tracking-wide text-muted-foreground">
                  {service.caption}
                </span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="primary" asChild>
            <a href="/servicos#servicos">
              Ver Todos os Serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
