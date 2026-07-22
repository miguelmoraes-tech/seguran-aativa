import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";

const FAQS = [
  {
    question: "O que é PGR e por que minha empresa precisa?",
    answer:
      "O Programa de Gerenciamento de Riscos (PGR) substituiu o PPRA e é obrigatório para todas as empresas que possuem empregados regidos pela CLT. Ele identifica, avalia e estabelece medidas de controle dos riscos ocupacionais presentes no ambiente de trabalho, conforme estabelece a NR-01. Sua ausência pode gerar autuações e multas aplicadas pelo Ministério do Trabalho.",
  },
  {
    question: "Qual a diferença entre PGR e PCMSO?",
    answer:
      "O PGR foca na identificação e controle dos riscos ambientais e ergonômicos no ambiente de trabalho (NR-01), enquanto o PCMSO é o programa médico que monitora a saúde dos trabalhadores expostos a esses riscos (NR-07). Ambos são complementares e obrigatórios: o PGR identifica os riscos e o PCMSO define quais exames médicos cada funcionário precisa realizar.",
  },
  {
    question:
      "O que é o eSocial e quais eventos SST minha empresa precisa enviar?",
    answer:
      "O eSocial é o sistema unificado de escrituração de informações trabalhistas e previdenciárias do governo federal. Os principais eventos de Saúde e Segurança do Trabalho (SST) são: S-2210 (Comunicação de Acidente de Trabalho), S-2220 (Monitoramento da Saúde), S-2240 (Condições Ambientais) e S-2221 (Exame Toxicológico para motoristas). O não envio gera multas e inconsistências no DCTFWeb.",
  },
  {
    question:
      "Com que frequência os exames médicos ocupacionais devem ser realizados?",
    answer:
      "Os exames periódicos devem ser realizados conforme o risco da função: anual para trabalhadores expostos a riscos que impliquem desencadeamento ou agravamento de doença ocupacional, ou trabalhadores com mais de 45 anos de idade; bienal para trabalhadores expostos a riscos moderados; ou a cada 5 anos para trabalhadores expostos a riscos baixos. O PCMSO define a periodicidade exata para cada função.",
  },
  {
    question: "Quando o LTCAT é necessário?",
    answer:
      "O Laudo Técnico de Condições Ambientais do Trabalho (LTCAT) é necessário para comprovar a exposição a agentes nocivos para fins previdenciários, especialmente para empresas que precisam comprovar aposentadoria especial. É exigido pelo INSS e pela Receita Federal para fins de contribuição previdenciária diferenciada.",
  },
  {
    question: "Os treinamentos NR têm validade? Precisam ser reciclados?",
    answer:
      "Sim, a maioria dos treinamentos das Normas Regulamentadoras possui validade e exige reciclagem. Por exemplo: NR-10 (reciclagem bienal), NR-12 (reciclagem anual para operadores de máquinas), NR-33 (reciclagem bienal), NR-35 (reciclagem bienal ou conforme avaliação de risco). A NR-01 prevê reciclagem anual ou bienal conforme o risco da atividade.",
  },
  {
    question: "O que acontece se minha empresa não estiver em conformidade?",
    answer:
      "A falta de conformidade com as normas de SST pode resultar em autuações e multas do Ministério do Trabalho, processos trabalhistas por danos morais e materiais, aumento do fator acidentário (FAP) que eleva o custo da contribuição previdenciária, e impossibilidade de participar de licitações públicas. O investimento em prevenção é sempre menor que o custo de uma não conformidade.",
  },
  {
    question:
      "Minha empresa precisa implementar o Fatores de Riscos Psicossociais conforme Nova NR-01?",
    answer:
      "Sim, o levantamento dos riscos psicossociais é obrigatório para todas as empresas que possuem funcionários e é fundamental para prevenir o adoecimento mental no ambiente de trabalho. O monitoramento contínuo deve ocorrer, no mínimo, a cada 2 anos, e exige levantamento imediato na ocorrência de mudanças nos processos, queixas de assédio, aumento de absenteísmo/turnover, ou impactos na saúde da equipe.",
  },
];

export function Faq() {
  return (
    <section className="section-y">
      <div className="container">
        <SectionHeader
          eyebrow="Dúvidas Frequentes"
          title="Perguntas sobre SST e eSocial"
          description="Reunimos as principais dúvidas de empresas sobre Segurança e Saúde do Trabalho. Não encontrou sua resposta? Fale com nossa equipe."
        />

        <div className="card-border-light mx-auto mt-8 max-w-3xl rounded-2xl bg-card px-6">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer ?? (
                    <span className="italic text-muted-foreground/70">
                      TODO: resposta pendente — me envie o texto real desta
                      pergunta.
                    </span>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
