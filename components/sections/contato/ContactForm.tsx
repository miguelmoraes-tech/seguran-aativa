"use client";

import * as React from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      nome: String(data.get("nome") ?? ""),
      email: String(data.get("email") ?? ""),
      telefone: String(data.get("telefone") ?? ""),
      empresa: String(data.get("empresa") ?? ""),
      segmento: String(data.get("segmento") ?? ""),
      servico: String(data.get("servico") ?? ""),
      mensagem: String(data.get("mensagem") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Não foi possível enviar sua mensagem.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Não foi possível enviar sua mensagem."
      );
    }
  }

  return (
    <div className="card-border-light rounded-2xl bg-card p-6">
      <h2 className="font-heading text-xl font-bold">
        Solicite seu orçamento
      </h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Preencha o formulário e nossa equipe técnica entrará em contato.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div
          style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
          aria-hidden="true"
        >
          <label htmlFor="website">Não preencha este campo</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Nome completo <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="nome"
            required
            maxLength={150}
            placeholder="Seu nome"
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">
              E-mail <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              maxLength={150}
              placeholder="seu@email.com"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium">
              Telefone <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              name="telefone"
              required
              maxLength={30}
              placeholder="(31) 99999-9999"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">
              Empresa <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="empresa"
              required
              maxLength={150}
              placeholder="Nome da empresa"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Segmento</label>
            <input
              type="text"
              name="segmento"
              maxLength={150}
              placeholder="Ex: Construção Civil"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">
            Serviço de interesse <span className="text-accent">*</span>
          </label>
          <select
            name="servico"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="" disabled>
              Selecione um serviço
            </option>
            <option>PGR</option>
            <option>PCMSO</option>
            <option>LTCAT</option>
            <option>Gestão eSocial</option>
            <option>Treinamentos NR</option>
            <option>Exames Ocupacionais</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">
            Mensagem <span className="text-accent">*</span>
          </label>
          <textarea
            name="mensagem"
            required
            maxLength={5000}
            rows={3}
            placeholder="Descreva brevemente sua necessidade..."
            className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
        </Button>

        {status === "success" && (
          <p className="rounded-lg bg-primary/10 px-3.5 py-2.5 text-sm font-medium text-primary">
            Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-600">
            {errorMessage ?? "Não foi possível enviar sua mensagem. Tente novamente."}
          </p>
        )}
      </form>

      <Button variant="outlinePrimary" className="mt-3 w-full" asChild>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="h-4 w-4" />
          Falar pelo WhatsApp
        </a>
      </Button>
    </div>
  );
}
