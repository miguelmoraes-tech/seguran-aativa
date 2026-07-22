"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const leftContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-primary sm:min-h-[calc(100vh-6rem)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.primary.light)_0%,transparent_60%)] opacity-40" />
      <div className="container relative grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={leftContainerVariants}
        >
          <motion.span
            variants={leftItemVariants}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-px w-8 bg-accent" />
            Engenharia &amp; Medicina Ocupacional
          </motion.span>
          <motion.h1
            variants={leftItemVariants}
            className="mt-6 font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl"
          >
            A Engenharia que Protege.
            <br />
            A Medicina que Previne.
          </motion.h1>
          <motion.p
            variants={leftItemVariants}
            className="mt-6 max-w-xl text-white/70"
          >
            Há mais de 17 anos garantindo conformidade legal, segurança no
            trabalho e saúde ocupacional para empresas de Belo Horizonte e
            Região Metropolitana.
          </motion.p>

          <motion.div
            variants={leftItemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              variant="accent"
              size="lg"
              className="rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              asChild
            >
              <a href="/servicos#servicos">Conheça Nossos Serviços</a>
            </Button>
          </motion.div>

          <motion.div
            variants={leftItemVariants}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              PGR · PCMSO · LTCAT
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              eSocial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              CREA-MG Ativo
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              CRM-MG Ativo
            </span>
          </motion.div>

          <motion.div
            variants={leftItemVariants}
            className="mt-10 flex max-w-md"
          >
            <div className="card-border-dark flex items-center gap-4 rounded-xl bg-white/5 px-5 py-5">
              <Award className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="font-heading text-2xl font-bold text-white">
                  100%
                </p>
                <p className="text-xs text-white/60">Conformidade Legal</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <Image
            src="/images/imgherosemfundo.png"
            alt=""
            aria-hidden="true"
            width={1530}
            height={1091}
            className="h-auto w-full object-cover opacity-50"
            priority
          />

          <div
            className="animate-float absolute bottom-6 left-6 flex flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-accent/70 bg-gradient-to-b from-primary-light to-primary-dark px-6 py-4 text-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)]"
          >
            <p className="font-heading text-3xl font-bold leading-none text-accent">
              17+
            </p>
            <p className="max-w-[90px] text-xs uppercase leading-tight tracking-wide text-white/80">
              Anos de Mercado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
