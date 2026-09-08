import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    company,
    phone,
    timeline,
    budget,
    description,
    services,
    estimatedCost,
  } = body;

  if (!name || !email || !description) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"SitePerHour Quotes" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `[SitePerHour] Custom Quote Request from ${name}${
        estimatedCost ? ` — $${Number(estimatedCost).toLocaleString()}` : ""
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Custom Quote Request — SitePerHour
          </h2>
          ${
            estimatedCost > 0
              ? `<div style="background: #3b82f6; color: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 18px; font-weight: bold;">
            Estimated Total: $${Number(estimatedCost).toLocaleString()}
          </div>`
              : ""
          }
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
          ${
            services?.length
              ? `<p><strong>Services:</strong> ${services.join(", ")}</p>`
              : ""
          }
          <p><strong>Description:</strong></p>
          <p>${description}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
