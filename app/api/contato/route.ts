import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL_TO = "comercial@ativamedicinaocupacional.com.br";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_MAP_MAX_SIZE = 1000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const FIELD_MAX_LENGTHS = {
  nome: 150,
  email: 150,
  telefone: 30,
  empresa: 150,
  segmento: 150,
  servico: 100,
  mensagem: 5000,
} as const;

type ContactPayload = {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  segmento?: string;
  servico: string;
  mensagem: string;
  // Honeypot: campo invisível para humanos. Se vier preenchido, é bot.
  website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();

  if (rateLimitMap.size > RATE_LIMIT_MAP_MAX_SIZE) {
    for (const [key, entry] of rateLimitMap) {
      if (now > entry.resetAt) rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    console.error("Variáveis SMTP não configuradas.");
    return NextResponse.json(
      { error: "Envio de e-mail não configurado no servidor." },
      { status: 500 }
    );
  }

  let payload: Partial<ContactPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  // Honeypot: humanos nunca preenchem este campo. Bots que preenchem tudo, sim.
  // Responde sucesso falso pra não revelar a armadilha, sem enviar e-mail de verdade.
  if (payload.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const nome = payload.nome?.trim();
  const email = payload.email?.trim();
  const telefone = payload.telefone?.trim();
  const empresa = payload.empresa?.trim();
  const segmento = payload.segmento?.trim();
  const servico = payload.servico?.trim();
  const mensagem = payload.mensagem?.trim();

  if (!nome || !email || !telefone || !empresa || !servico || !mensagem) {
    return NextResponse.json(
      { error: "Preencha todos os campos obrigatórios." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const tooLong =
    nome.length > FIELD_MAX_LENGTHS.nome ||
    email.length > FIELD_MAX_LENGTHS.email ||
    telefone.length > FIELD_MAX_LENGTHS.telefone ||
    empresa.length > FIELD_MAX_LENGTHS.empresa ||
    (segmento?.length ?? 0) > FIELD_MAX_LENGTHS.segmento ||
    servico.length > FIELD_MAX_LENGTHS.servico ||
    mensagem.length > FIELD_MAX_LENGTHS.mensagem;

  if (tooLong) {
    return NextResponse.json(
      { error: "Um ou mais campos excedem o tamanho máximo permitido." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1a1a1a;">
      <h2 style="margin-bottom: 16px;">Novo contato pelo site — ${escapeHtml(empresa)}</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>
      <p><strong>Segmento:</strong> ${escapeHtml(segmento || "Não informado")}</p>
      <p><strong>Serviço de interesse:</strong> ${escapeHtml(servico)}</p>
      <p><strong>Mensagem:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(mensagem)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Novo contato pelo site — ${empresa}`,
      html,
      text: [
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Telefone: ${telefone}`,
        `Empresa: ${empresa}`,
        `Segmento: ${segmento || "Não informado"}`,
        `Serviço de interesse: ${servico}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail via SMTP:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
