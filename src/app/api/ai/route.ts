// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI,
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message, instructions } = body;

        if (!message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const resp = await openai.responses.create({
            model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
            instructions: instructions || "You are a helpful assistant. Please respond to the user's message. The first message from user should include his name. In response, you should give back that name in this from: <>Name</>",
            input: [
                { "role": "user", "content": message },
            ],
        })

        return NextResponse.json({ message: resp.output_text }, { status: 200 });

        // Itt jönne az emailküldés, pl. nodemailer
    } catch (error) {
        console.error('API hiba:', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
