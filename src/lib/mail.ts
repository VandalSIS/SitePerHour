import nodemailer from "nodemailer";

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getMailConfig() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();
  const to = process.env.CONTACT_TO?.trim() || user;

  if (!user || !pass) {
    return { ok: false as const, error: "Email is not configured" };
  }

  return {
    ok: true as const,
    user,
    pass,
    to: to || user,
  };
}

export function createGmailTransporter() {
  const config = getMailConfig();
  if (!config.ok) return config;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  return { ok: true as const, transporter, ...config };
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
