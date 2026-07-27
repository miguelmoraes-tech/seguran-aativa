import { PageHero } from "@/components/layout/PageHero";
import { DocumentacaoTecnica } from "@/components/sections/servicos/DocumentacaoTecnica";
import { EventosEsocial } from "@/components/sections/servicos/EventosEsocial";
import { MedicoesAmbientais } from "@/components/sections/servicos/MedicoesAmbientais";
import { ExamesOcupacionais } from "@/components/sections/servicos/ExamesOcupacionais";
import { ServicosCta } from "@/components/sections/servicos/ServicosCta";
import { BottomCta } from "@/components/layout/BottomCta";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

const TITLE = "Serviços e Exames em Segurança do Trabalho | Segurança Ativa";
const DESCRIPTION =
  "Laudos técnicos, PGR, PCMSO, LTCAT, medições ambientais e exames ocupacionais em Belo Horizonte. Conheça o portfólio completo em Segurança do Trabalho.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/servicos",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/servicos",
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

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio Completo"
        title="Nossos Serviços"
        description="Soluções integradas em Engenharia de Segurança do Trabalho e Medicina Ocupacional para manter sua empresa em total conformidade."
      />
      <DocumentacaoTecnica />
      <EventosEsocial />
      <MedicoesAmbientais />
      <ExamesOcupacionais />
      <ServicosCta />
      <BottomCta />
    </>
  );
}
