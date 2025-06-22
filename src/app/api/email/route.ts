// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, type, message } = body;

        if (!name || !email || !type || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail({
                from: `"${name}" <${email}>`,
                to: process.env.RECEIVER_EMAIL,
                subject: 'A potancional customer message',
                html: `
                    <h1>New message from ${name}</h1>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Type:</strong> ${type}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            });
            return NextResponse.json({ message: 'Email sent successfully', }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error: 'Email sending is failed', }, { status: 500 });

        }
        // Itt jönne az emailküldés, pl. nodemailer
    } catch (error) {
        console.error('API hiba:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
