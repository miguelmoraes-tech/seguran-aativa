"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos#servicos" },
  { label: "Exames", href: "/servicos#exames" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  function handleInicioClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between sm:h-24">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Segurança Ativa"
            width={160}
            height={48}
            className="h-[59px] w-auto object-contain sm:h-[67px]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.split("#")[0]) &&
                  item.href.split("#")[0] !== "/";
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.href === "/" ? handleInicioClick : undefined}
                className={cn(
                  "text-[17px] font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary font-semibold" : "text-foreground/70"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Solicitar Orçamento
            </a>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.href === "/" ? handleInicioClick : () => setOpen(false)}
                className="rounded-md px-3 py-3 text-[17px] font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" className="mt-2 w-full" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Solicitar Orçamento
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
