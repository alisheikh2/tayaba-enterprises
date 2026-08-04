import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ContactSubmission from '@/models/ContactSubmission';

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

    // Basic email format sanity check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Save to MongoDB if available
    let savedToDb = false;
    try {
      const db = await connectToDatabase();
      if (db) {
        await ContactSubmission.create({
          formType: formType || 'contact',
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone ? String(phone).trim() : '',
          message: message.trim(),
          status: 'new',
        });
        savedToDb = true;
      }
    } catch (dbErr) {
      console.error('[contact] Error saving to MongoDB:', dbErr);
    }

    // Send email via Resend if credentials provided
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    let emailDelivered = false;

    if (apiKey && recipient) {
      const subject = `Tayaba Enterprises — New ${FORM_LABELS[formType] || 'Website'} Submission`;
      const html = `
        <h2>${escapeHtml(FORM_LABELS[formType] || 'Website Submission')}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `;

      try {
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

        if (emailRes.ok) {
          emailDelivered = true;
        } else {
          const errText = await emailRes.text();
          console.error('[contact] Resend API error:', errText);
        }
      } catch (emailErr) {
        console.error('[contact] Resend dispatch error:', emailErr);
      }
    } else {
      console.warn(
        '[contact] RESEND_API_KEY / CONTACT_RECIPIENT_EMAIL not set — email dispatch skipped.'
      );
    }

    return NextResponse.json({
      success: true,
      savedToDb,
      delivered: emailDelivered,
    });
  } catch (error) {
    console.error('[contact] Unexpected error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
