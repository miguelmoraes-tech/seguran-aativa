import { PageHero } from "@/components/layout/PageHero";
import { TrainingCatalog } from "@/components/sections/treinamentos/TrainingCatalog";
import { CapacitacaoProcess } from "@/components/sections/treinamentos/CapacitacaoProcess";
import { TrustStrip } from "@/components/sections/treinamentos/TrustStrip";
import { TreinamentosCta } from "@/components/sections/treinamentos/TreinamentosCta";
import { BottomCta } from "@/components/layout/BottomCta";

export const metadata = {
  title: "Treinamentos NR | Segurança Ativa",
};

export default function TreinamentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Capacitação Profissional"
        title="Treinamentos NR"
        description="Formação e reciclagem nas principais normas regulamentadoras. Presencial e EAD com certificado de validade legal."
      />
      <TrainingCatalog />
      <CapacitacaoProcess />
      <TrustStrip />
      <TreinamentosCta />
      <BottomCta variant="light" />
    </>
  );
}
