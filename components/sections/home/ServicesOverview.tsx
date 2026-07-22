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
    caption: "Programa de Gerenciamento de Riscos (NR-01 / NR-09)",
    description: [
      "Identifica e avalia os riscos ocupacionais",
      "Define medidas de prevenção e controle",
    ],
  },
  {
    icon: Activity,
    tag: "PCMSO",
    caption: "Programa de Controle Médico de Saúde Ocupacional (NR-07)",
    description: [
      "Monitora a saúde dos trabalhadores",
      "Define os exames ocupacionais obrigatórios",
    ],
  },
  {
    icon: Shield,
    tag: "LTCAT",
    caption: "Laudo Técnico das Condições Ambientais do Trabalho",
    description: [
      "Avalia a exposição a agentes nocivos",
      "Serve de base para o PPP e aposentadoria especial",
    ],
  },
  {
    icon: ClipboardList,
    tag: "Gestão eSocial",
    caption: "Eventos SST",
    description: [
      "Envio dos eventos de SST ao eSocial",
      "Mantém a empresa em conformidade com a legislação vigente",
    ],
  },
  {
    icon: Stethoscope,
    tag: "Exames Ocupacionais",
    caption: "ASO e complementares",
    description: [
      "Emissão do ASO (Atestado de Saúde Ocupacional)",
      "Realização de exames complementares, como Audiometria, ECG, Raio-X e demais exames ocupacionais",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Treinamentos NR",
    caption: "Capacitação profissional",
    description: [
      "Formação inicial e reciclagem periódica",
      "Certificados válidos em todo o território nacional",
    ],
  },
  {
    icon: FileText,
    tag: "AET",
    caption: "Análise Ergonômica do Trabalho (NR-17)",
    description: [
      "Avalia as condições ergonômicas das atividades desempenhadas",
      "Avalia os fatores de riscos psicossociais",
      "Propõe melhorias para reduzir a fadiga mental e física, prevenir lesões e promover melhores condições de trabalho",
    ],
  },
  {
    icon: ClipboardList,
    tag: "RAC",
    caption: "Requisitos de Atividades Críticas",
    description: [
      "Requisitos mínimos para atividades críticas",
      "Cobre 9 frentes: altura, LOTO, içamento, espaços confinados e mais",
    ],
  },
  {
    icon: Shield,
    tag: "LIP",
    caption: "Laudo de Insalubridade e Periculosidade (NR-15 / NR-16)",
    description: [
      "Avalia atividades insalubres e perigosas",
      "Determina o direito aos adicionais legais",
    ],
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
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {service.description.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
