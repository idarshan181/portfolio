// /app/actions/send-contact.ts
'use server';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// 1 request every 10 minutes
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(1, '600 s'),
});

export async function sendContact({
  name,
  email,
  message,
  reason,
  ip,
}: {
  name: string;
  email: string;
  message: string;
  reason?: string;
  ip?: string;
}) {
  try {
    const identifier = ip || email;
    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return {
        success: false,
        rateLimited: true,
        message: 'Rate limit exceeded. Please wait 10 minutes before trying again.',
      };
    }

    await resend.emails.send({
      from: 'Darshan Patel <mail@idarshan18.com>',
      to: ['work.idarshan18@gmail.com'],
      subject: `📬 New Contact Message from ${name}`,
      replyTo: email,
      html: generateContactHtml({ name, email, message, reason }),
    });

    return { success: true };
  } catch (err) {
    console.error('[SendContactError]', err);
    return {
      success: false,
      rateLimited: false,
      message: 'Something went wrong while sending your message.',
    };
  }
}

function generateContactHtml({
  name,
  email,
  message,
  reason,
}: {
  name: string;
  email: string;
  message: string;
  reason?: string;
}) {
  return `
    <div style="font-family: sans-serif; line-height: 1.5; padding: 16px;">
      <h2>📬 New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Reason:</strong> ${reason || 'Not specified'}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line; background: #f9f9f9; padding: 12px; border-left: 4px solid #ccc;">
        ${message.replace(/\n/g, '<br />')}
      </p>
    </div>
  `;
}
