import { PageHero } from "@/components/layout/PageHero";
import { TrainingCatalog } from "@/components/sections/treinamentos/TrainingCatalog";
import { CapacitacaoProcess } from "@/components/sections/treinamentos/CapacitacaoProcess";
import { TrustStrip } from "@/components/sections/treinamentos/TrustStrip";
import { TreinamentosCta } from "@/components/sections/treinamentos/TreinamentosCta";
import { BottomCta } from "@/components/layout/BottomCta";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

const TITLE = "Treinamentos NR Presenciais e EAD | Segurança Ativa";
const DESCRIPTION =
  "Treinamentos NR presenciais e EAD com certificado válido: NR 6, 10, 12, 33, 35 e mais. Capacitação para sua equipe em Belo Horizonte e região metropolitana.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/treinamentos",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/treinamentos",
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/twitter-image.png"],
  },
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
      <BottomCta variant="footer" />
    </>
  );
}
