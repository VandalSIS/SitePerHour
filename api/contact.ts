import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
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
      from: `"SitePerHour Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: subject ? `[SitePerHour] ${subject}` : `[SitePerHour] New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Message — SitePerHour
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${subject ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #666;">Subject:</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #666; margin-bottom: 8px;">Message:</p>
            <div style="background: #f4f4f4; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <p style="margin-top: 20px; color: #999; font-size: 12px;">
            Sent via siteperhour.com contact form
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
