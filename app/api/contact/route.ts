// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, sp_req, message } = body;

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // TODO: Send email using Resend, Nodemailer, etc.
  console.log('Received contact form submission:', { name, email, phone, message });
  try{
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or 'Outlook', 'Yahoo', or  or use 'host', 'port', etc.
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      }
    })

    await transporter.sendMail({
      from: `${email}`,
      to: process.env.EMAIL_TO || "suhailsalva@gmail.com" || "pharishkumar123@gmail.com",
      cc: "suhailsalva@gmail.com",
      bcc: "pharishkumar123@gmail.com",
      subject: `New Solar Plant of ${sp_req/1000} MW Request from ${name} - ${phone}`,
      text: `From: ${name} <${email}>\n\n Dear Sir,\n We would like to inform you that there is a requirement for the installation of a ${sp_req} kW (${sp_req/1000} MW) solar power plant to meet our current and future energy demands.\n
      ${message}\n\n 
      Please treat this matter as a priority and acknowledge receipt of this communication.\n\n${name}\n${phone}`,
    })
    
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({error: 'Failed to send email.'}, {status: 500})
  }

  
}
