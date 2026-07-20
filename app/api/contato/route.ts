import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL_TO = "contato@ativamedicinaocupacional.com.br";
const EMAIL_FROM = process.env.EMAIL_FROM ?? "Site Segurança Ativa <onboarding@resend.dev>";

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

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada.");
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

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: CONTACT_EMAIL_TO,
    replyTo: email,
    subject: `Novo contato pelo site — ${empresa}`,
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

  if (error) {
    console.error("Erro ao enviar e-mail via Resend:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
