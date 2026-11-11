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
  const company = String(body.company ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const timeline = String(body.timeline ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const description = String(body.description ?? "").trim();
  const services = Array.isArray(body.services)
    ? body.services.map((s) => String(s))
    : [];
  const estimatedCost = Number(body.estimatedCost ?? 0);

  if (!name || !email || !description) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const mail = createGmailTransporter();
  if (!mail.ok) {
    console.error("Quote form: missing GMAIL_USER / GMAIL_APP_PASSWORD");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  try {
    await mail.transporter.sendMail({
      from: `"SitePerHour Quotes" <${mail.user}>`,
      to: mail.to,
      replyTo: email,
      subject: `[SitePerHour] Custom Quote — ${name}${
        estimatedCost > 0 ? ` — $${estimatedCost.toLocaleString()}` : ""
      }`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\n\n${description}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Custom Quote Request — SitePerHour
          </h2>
          ${
            estimatedCost > 0
              ? `<div style="background: #3b82f6; color: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 18px; font-weight: bold;">
            Estimated Total: $${estimatedCost.toLocaleString()}
          </div>`
              : ""
          }
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
          ${timeline ? `<p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>` : ""}
          ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
          ${
            services.length
              ? `<p><strong>Services:</strong> ${escapeHtml(services.join(", "))}</p>`
              : ""
          }
          <p><strong>Description:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(description)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
