import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { StructuredData } from "@/components/layout/StructuredData";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const HOME_TITLE =
  "Segurança Ativa | Engenharia e Medicina Ocupacional em Belo Horizonte";
const HOME_DESCRIPTION =
  "Segurança do Trabalho e Medicina Ocupacional em Belo Horizonte: PGR, PCMSO, LTCAT, exames ocupacionais, treinamentos NR e eSocial SST. Solicite um orçamento.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${heading.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-body">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId="G-H0RBK9ZWYK" />
    </html>
  );
}
