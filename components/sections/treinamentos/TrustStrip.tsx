import { CheckCircle2 } from "lucide-react";

const ITEMS = [
  "Instrutores habilitados e experientes",
  "Certificado com validade legal em todo o território nacional",
  "Modalidades presencial e EAD disponíveis",
  "Conteúdo atualizado conforme últimas revisões das NRs",
];

export function TrustStrip() {
  return (
    <section className="section-y-sm bg-primary">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-white/80">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
