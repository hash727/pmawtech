// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, message } = body;

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // TODO: Send email using Resend, Nodemailer, etc.
  console.log('Received contact form submission:', { name, email, phone, message });

  return NextResponse.json({ success: true });
}
