import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos#servicos" },
  { label: "Exames", href: "/servicos#exames" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Contato", href: "/contato" },
];

const SERVICOS = [
  { label: "PGR", href: "/servicos#servicos" },
  { label: "PCMSO", href: "/servicos#servicos" },
  { label: "LTCAT", href: "/servicos#servicos" },
  { label: "Gestão eSocial", href: "/servicos#servicos" },
  { label: "Treinamentos NR", href: "/treinamentos" },
  { label: "Exames Ocupacionais", href: "/servicos#exames" },
];

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="Segurança Ativa"
            width={160}
            height={48}
            className="h-11 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 text-sm text-white/60">
            Há mais de 17 anos protegendo vidas e empresas com excelência em
            Engenharia de Segurança do Trabalho e Medicina Ocupacional.
          </p>
          <div className="mt-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <ShieldCheck className="h-4 w-4" />
              CREA-MG Ativo
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <ShieldCheck className="h-4 w-4" />
              CRM-MG Ativo
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
            Navegação
          </h4>
          <ul className="mt-4 space-y-3">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
            Serviços
          </h4>
          <ul className="mt-4 space-y-3">
            {SERVICOS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Belo Horizonte, Contagem, Betim e Região Metropolitana</li>
            <li>
              <a href="tel:+553137872337" className="hover:text-white">
                (31) 3787-2337
              </a>
            </li>
            <li>
              <a
                href="mailto:comercial@ativamedicinaocupacional.com.br"
                className="hover:text-white"
              >
                comercial@ativamedicinaocupacional.com.br
              </a>
            </li>
            <li>Seg a Sex: 8h às 18h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © 2026 Segurança Ativa Engenharia e Medicina Ocupacional. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/80">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-white/80">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
