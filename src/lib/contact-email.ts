export type ContactEnv = {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website?: string;
  startedAt?: number;
};

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; status: number; error: string };

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4000;
const MIN_MESSAGE_LENGTH = 10;
const MIN_FORM_TIME_MS = 1200;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(payload: unknown): ContactValidationResult {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { ok: false, status: 400, error: "Dados invalidos." };
  }

  const fields = payload as Record<string, unknown>;
  const name = normalizeText(fields.name);
  const email = normalizeText(fields.email).toLowerCase();
  const message = normalizeText(fields.message);
  const website = normalizeText(fields.website);
  const startedAt = typeof fields.startedAt === "number" ? fields.startedAt : undefined;

  if (website) {
    return { ok: false, status: 400, error: "Nao foi possivel enviar a mensagem." };
  }

  if (startedAt && Date.now() - startedAt < MIN_FORM_TIME_MS) {
    return { ok: false, status: 429, error: "Aguarde alguns segundos e tente novamente." };
  }

  if (!name || name.length > MAX_NAME_LENGTH) {
    return { ok: false, status: 400, error: "Informe um nome valido." };
  }

  if (!email || email.length > MAX_EMAIL_LENGTH || !emailPattern.test(email)) {
    return { ok: false, status: 400, error: "Informe um e-mail valido." };
  }

  if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return {
      ok: false,
      status: 400,
      error: "A mensagem precisa ter entre 10 e 4000 caracteres.",
    };
  }

  return { ok: true, data: { name, email, message, website, startedAt } };
}

export function validateContactEnv(env: ContactEnv): string | undefined {
  if (!env.RESEND_API_KEY) return "RESEND_API_KEY nao configurada.";
  if (!env.CONTACT_TO_EMAIL) return "CONTACT_TO_EMAIL nao configurado.";
  if (!env.CONTACT_FROM_EMAIL) return "CONTACT_FROM_EMAIL nao configurado.";
  return undefined;
}

export async function sendContactEmail(env: ContactEnv, data: ContactPayload) {
  const envError = validateContactEnv(env);
  if (envError) {
    console.error("Contact email configuration error:", envError);
    return {
      ok: false,
      status: 500,
      error: "Nao foi possivel enviar a mensagem agora.",
    };
  }

  const text = [
    "Nova mensagem recebida pelo portfolio.",
    "",
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    "",
    "Mensagem:",
    data.message,
  ].join("\n");

  const html = `
    <h2>Nova mensagem pelo portfolio</h2>
    <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: data.email,
      subject: `Nova mensagem pelo portfolio - ${data.name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend contact email failed", response.status, details);
    return {
      ok: false,
      status: 502,
      error: "Nao foi possivel enviar a mensagem agora.",
    };
  }

  return { ok: true, status: 200 };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
