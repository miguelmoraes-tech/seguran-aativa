import { PageHero } from "@/components/layout/PageHero";
import { DocumentacaoTecnica } from "@/components/sections/servicos/DocumentacaoTecnica";
import { EventosEsocial } from "@/components/sections/servicos/EventosEsocial";
import { MedicoesAmbientais } from "@/components/sections/servicos/MedicoesAmbientais";
import { ExamesOcupacionais } from "@/components/sections/servicos/ExamesOcupacionais";
import { ServicosCta } from "@/components/sections/servicos/ServicosCta";
import { BottomCta } from "@/components/layout/BottomCta";

export const metadata = {
  title: "Serviços e Exames | Segurança Ativa",
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
