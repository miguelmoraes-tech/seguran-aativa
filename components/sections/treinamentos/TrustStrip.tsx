import { CheckCircle2 } from "lucide-react";

const ITEMS = [
  "Instrutores habilitados e experientes",
  "Certificado com validade legal em todo o território nacional",
  "Modalidades presencial e EAD disponíveis",
  "Conteúdo atualizado conforme últimas revisões das NRs",
];

export function TrustStrip() {
  return (
    <section className="section-y-sm overflow-hidden bg-primary">
      <div className="flex w-max animate-marquee gap-16 motion-reduce:animate-none [animation-play-state:running] hover:[animation-play-state:paused]">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-white/80">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
