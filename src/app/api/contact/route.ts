import { NextResponse } from "next/server";
import {
  createGmailTransporter,
  escapeHtml,
  isValidEmail,
} from "@/lib/mail";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (name.length > 120 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const mail = createGmailTransporter();
  if (!mail.ok) {
    console.error("Contact form: missing GMAIL_USER / GMAIL_APP_PASSWORD");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  try {
    await mail.transporter.sendMail({
      from: `"SitePerHour Contact" <${mail.user}>`,
      to: mail.to,
      replyTo: email,
      subject: subject
        ? `[SitePerHour] ${subject}`
        : `[SitePerHour] Mesaj nou de la ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "-"}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Mesaj nou — SitePerHour
          </h2>
          <p><strong>Nume:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${subject ? `<p><strong>Subiect:</strong> ${escapeHtml(subject)}</p>` : ""}
          <p><strong>Mesaj:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
