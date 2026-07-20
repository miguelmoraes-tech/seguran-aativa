import { Volume2, Thermometer, Waves, FlaskConical, Wind, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const MEDICOES = [
  {
    icon: Volume2,
    title: "Ruído",
    description: "Dosimetria e decibelímetro conforme NHO-01.",
  },
  {
    icon: Thermometer,
    title: "Calor / IBUTG",
    description: "Índice de Bulbo Úmido Termômetro de Globo.",
  },
  {
    icon: Waves,
    title: "Vibração",
    description: "Corpo inteiro e mãos-braços conforme NHO-09/10.",
  },
  {
    icon: FlaskConical,
    title: "Agentes Químicos",
    description: "Coleta e análise de gases, vapores e fumos.",
  },
  {
    icon: Wind,
    title: "Poeiras",
    description: "Material particulado total e respirável.",
  },
  {
    icon: Gauge,
    title: "Conforto Térmico",
    description: "Avaliação de campo térmico e conforto ambiental.",
  },
];

export function MedicoesAmbientais() {
  return (
    <section id="higiene" className="section-anchor section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Higiene Ocupacional"
          title="Medições e avaliações ambientais"
          description="Equipamentos calibrados e metodologias reconhecidas para avaliação precisa dos agentes de risco no ambiente de trabalho."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MEDICOES.map((item) => (
            <Card key={item.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
