import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const CARDS = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(31) 3787-2337",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "comercial@ativamedicinaocupacional.com.br",
    // Sem quebra de linha: card ocupa a largura inteira pra caber numa linha só.
    nowrap: true,
  },
];

const REGIAO = {
  icon: MapPin,
  label: "Regiões de Atendimento",
  value: "Belo Horizonte, Contagem, Betim e Região Metropolitana",
};

export function ContactInfo() {
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        {CARDS.map((card) => (
          <div
            key={card.label}
            className="card-border-light min-w-0 rounded-2xl bg-card p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <card.icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {card.label}
            </p>
            <p
              className={cn(
                "mt-1 text-sm font-medium",
                card.nowrap ? "whitespace-nowrap" : "break-words"
              )}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="card-border-light overflow-hidden rounded-2xl bg-card">
        <div className="relative aspect-[1024/569] w-full bg-muted">
          <Image
            src="/images/mapa-atendimento.png"
            alt="Mapa da área de atendimento: raio ao redor de Belo Horizonte, Contagem e Betim"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex items-center gap-3 border-t border-border p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <REGIAO.icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {REGIAO.label}
            </p>
            <p className="mt-0.5 break-words text-sm font-medium">
              {REGIAO.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
