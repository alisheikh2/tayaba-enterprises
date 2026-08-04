import { NextResponse } from 'next/server';

interface ContactPayload {
  formType: 'contact' | 'quote' | 'career';
  name: string;
  email: string;
  phone?: string;
  message: string;
  [key: string]: unknown;
}

const FORM_LABELS: Record<ContactPayload['formType'], string> = {
  contact: 'General Inquiry',
  quote: 'Quote Request',
  career: 'Career Application',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { formType, name, email, phone, message } = body;

    if (!formType || !name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Basic email format sanity check.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || !recipient) {
      // No email service configured (e.g. local dev without .env.local).
      // We still acknowledge the submission instead of silently
      // pretending to send an email we never attempted.
      console.warn(
        '[contact] RESEND_API_KEY / CONTACT_RECIPIENT_EMAIL not set — submission logged only, no email sent.',
        { formType, name, email }
      );
      return NextResponse.json({ success: true, delivered: false });
    }

    const subject = `Tayaba Enterprises — New ${FORM_LABELS[formType] || 'Website'} Submission`;
    const html = `
      <h2>${escapeHtml(FORM_LABELS[formType] || 'Website Submission')}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Tayaba Enterprises Website <onboarding@resend.dev>',
        to: [recipient],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error('[contact] Resend API error:', errText);
      return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, delivered: true });
  } catch (error) {
    console.error('[contact] Unexpected error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
