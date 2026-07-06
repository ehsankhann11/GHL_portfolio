import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || 'ehsanmarwat.dev@gmail.com';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.fullName || !data.email || !data.businessName || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured — lead was not delivered.');
      return NextResponse.json(
        { error: 'Lead delivery is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'Portfolio Lead <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      replyTo: data.email,
      subject: `New lead: ${data.businessName} — ${data.service}`,
      text: [
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Business: ${data.businessName}`,
        `Service: ${data.service}`,
        `Budget: ${data.budget || 'Not specified'}`,
        `Details: ${data.projectDetails || 'No details provided'}`,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend failed to send lead email:', error);
      return NextResponse.json(
        { error: 'Failed to deliver lead' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
