import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL_TO = "contato@ativamedicinaocupacional.com.br";

type ContactPayload = {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  segmento?: string;
  servico: string;
  mensagem: string;
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

export async function POST(request: Request) {
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

  const { nome, email, telefone, empresa, segmento, servico, mensagem } = payload;

  if (!nome?.trim() || !email?.trim() || !telefone?.trim() || !empresa?.trim() || !servico?.trim() || !mensagem?.trim()) {
    return NextResponse.json(
      { error: "Preencha todos os campos obrigatórios." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
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
