import {
  Stethoscope,
  Heart,
  Brain,
  Ear,
  Wind,
  FlaskConical,
  Scan,
  Eye,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const EXAMES = [
  {
    icon: Stethoscope,
    title: "ASO",
    description: "Atestado de Saúde Ocupacional completo.",
  },
  {
    icon: Heart,
    title: "ECG",
    description: "Eletrocardiograma em repouso.",
  },
  {
    icon: Brain,
    title: "EEG",
    description: "Eletroencefalograma.",
  },
  {
    icon: Ear,
    title: "Audiometria",
    description: "Audiometria tonal e vocal.",
  },
  {
    icon: Wind,
    title: "Espirometria",
    description: "Prova de função pulmonar.",
  },
  {
    icon: FlaskConical,
    title: "Laboratoriais",
    description: "Hemograma, glicemia, urina e mais.",
  },
  {
    icon: Scan,
    title: "Raio-X",
    description: "Tórax OIT e complementares.",
  },
  {
    icon: Eye,
    title: "Acuidade Visual",
    description: "Teste de visão Snellen e Ishihara.",
  },
];

export function ExamesOcupacionais() {
  return (
    <section id="exames" className="section-anchor section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Exames Ocupacionais"
          title="Saúde do trabalhador em primeiro lugar"
          description="Exames admissionais, periódicos, demissionais, de retorno e mudança de risco com emissão imediata de ASO."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMES.map((exame) => (
            <Card key={exame.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <exame.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-sm font-bold">
                {exame.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {exame.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
