import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, phone, timeline, budget, description, services, estimatedCost } = req.body;

  if (!name || !email || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
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
      subject: `[SitePerHour] Custom Quote Request from ${name}${estimatedCost ? ` — $${estimatedCost.toLocaleString()}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Custom Quote Request — SitePerHour
          </h2>
          ${estimatedCost > 0 ? `<div style="background: #3b82f6; color: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 18px; font-weight: bold;">
            Estimated Total: $${estimatedCost.toLocaleString()}
          </div>` : ''}
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666; width: 130px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Company:</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>` : ''}
            ${timeline ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Timeline:</td><td style="padding: 8px 0;">${timeline}</td></tr>` : ''}
            ${budget ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Budget:</td><td style="padding: 8px 0;">${budget}</td></tr>` : ''}
          </table>
          ${services && services.length > 0 ? `
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #666; margin-bottom: 8px;">Selected Services:</p>
            <ul style="margin: 0; padding-left: 20px;">
              ${services.map((s: string) => `<li style="padding: 4px 0;">${s}</li>`).join('')}
            </ul>
          </div>` : ''}
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #666; margin-bottom: 8px;">Project Description:</p>
            <div style="background: #f4f4f4; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
              ${description}
            </div>
          </div>
          <p style="margin-top: 20px; color: #999; font-size: 12px;">
            Sent via siteperhour.com custom quote form
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
