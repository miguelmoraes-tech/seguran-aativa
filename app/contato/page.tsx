import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/contato/ContactForm";
import { ContactInfo } from "@/components/sections/contato/ContactInfo";
import { BottomCta } from "@/components/layout/BottomCta";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

const TITLE = "Contato | Segurança Ativa Engenharia e Medicina Ocupacional";
const DESCRIPTION =
  "Fale com a Segurança Ativa: atendimento especializado em Segurança do Trabalho e Medicina Ocupacional em Belo Horizonte. Solicite seu orçamento sem compromisso.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contato",
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

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale Conosco"
        title="Contato"
        description="Atendimento rápido e personalizado para a sua empresa."
      />
      <section className="section-y">
        <div className="container grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      <BottomCta />
    </>
  );
}
