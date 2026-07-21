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
    caption: "Programa de Controle Médico",
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
    caption: "Laudo Técnico de Condições Ambientais",
    description: [
      "Avalia a exposição a agentes nocivos no ambiente de trabalho",
      "Caracteriza atividades especiais para fins previdenciários",
      "Serve de base para emissão do PPP",
      "Identifica agentes físicos, químicos e biológicos",
    ],
  },
  {
    icon: ClipboardList,
    tag: "Gestão eSocial",
    caption: "Eventos SST",
    description: [
      "Envia os eventos S-2210, S-2220, S-2240 e S-2221 ao eSocial",
      "Centraliza o controle de saúde e segurança do trabalho",
      "Mantém a empresa em conformidade total com as exigências legais",
      "Reduz o risco de autuações e passivos trabalhistas",
    ],
  },
  {
    icon: Stethoscope,
    tag: "Exames Ocupacionais",
    caption: "ASO e complementares",
    description: [
      "Realiza audiometria, espirometria, ECG, EEG e acuidade visual",
      "Inclui raio-X e exames laboratoriais complementares",
      "Emissão imediata do ASO (Atestado de Saúde Ocupacional)",
      "Atende exames admissionais, periódicos e demissionais",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Treinamentos NR",
    caption: "Capacitação profissional",
    description: [
      "Formação inicial e reciclagem periódica",
      "Abrange as principais normas regulamentadoras (NR-01 a NR-35)",
      "Capacitação teórica e prática conforme exigência legal",
      "Emissão de certificados válidos em todo o território nacional",
    ],
  },
  {
    icon: FileText,
    tag: "AET",
    caption: "Análise Ergonômica do Trabalho (NR-17)",
    description: [
      "Avalia as condições ergonômicas das atividades",
      "Analisa postura, esforço físico e organização do trabalho",
      "Propõe melhorias para reduzir fadiga e lesões",
      "Adequa o trabalho às capacidades do trabalhador",
    ],
  },
  {
    icon: ClipboardList,
    tag: "RAC",
    caption: "Requisitos de Atividades Críticas",
    description: [
      "Estabelece requisitos mínimos para execução de atividades críticas",
      "Define procedimentos de segurança para reduzir riscos e prevenir acidentes",
      "Exige planejamento, capacitação e controle operacional",
      "Contempla: Trabalhos em Altura, Veículos Automotores Leves, Operação de Equipamentos Móveis, Bloqueio/Identificação e Zero Energia (LOTO), Içamento de Cargas, Trabalhos em Espaços Confinados, Proteção de Máquinas, Atividades no Terreno, Trabalhos com Eletricidade",
    ],
  },
  {
    icon: Shield,
    tag: "LIP",
    caption: "Laudo de Insalubridade e Periculosidade (NR-15 / NR-16)",
    description: [
      "Avalia a existência de atividades insalubres e perigosas",
      "Identifica agentes nocivos e situações de risco",
      "Determina o direito aos adicionais de insalubridade ou periculosidade",
      "Recomenda medidas para eliminar ou reduzir a exposição aos riscos",
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
