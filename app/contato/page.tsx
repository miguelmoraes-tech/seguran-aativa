import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/contato/ContactForm";
import { ContactInfo } from "@/components/sections/contato/ContactInfo";
import { BottomCta } from "@/components/layout/BottomCta";

export const metadata = {
  title: "Contato | Segurança Ativa",
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
