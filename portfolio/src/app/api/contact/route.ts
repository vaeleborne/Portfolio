export const runtime = "nodejs";
import { error } from "console";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE = new Map<string, {count: number; ts: number}>(); // DEMO ONLY (Not for being ran across multiple server instances

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const entry = RATE.get(ip) ?? {count: 0, ts: now};

    const MESSAGE_LENGTH = 5000;
    if (now - entry.ts > 60_000) {entry.count = 0; entry.ts = now;}
    if (++entry.count > 5) { RATE.set(ip, entry); return NextResponse.json({ok: false, error: "Slow Down"}, {status: 429});}
    RATE.set(ip, entry);

    const {name, email, message} = await req.json();

    //Check that we have all needed elements
    if(!name || !email || !message) return NextResponse.json({ok: false, error: "Missing Fields"}, {status: 400});

    //Simple email validation
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if(!emailRegex.test(email)) {
        return NextResponse.json({ok: false, error: "Invalid Email"}, {status: 400});
    }

    //Prevent header injection
    if(email.includes("\n") || email.includes("\r")) {
        return NextResponse.json({ok: false, error: "Bad Email"}, {status: 400});
    }

    //Bound the message length
    if(message.length > MESSAGE_LENGTH) {
        return NextResponse.json({ok: false, error: "Message is too long"}, {status: 413});
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST!,
        port: Number(process.env.SMTP_PORT!),
        secure: false, //TLS 587
        auth: {
            user: process.env.SMTP_USER!,
            pass: process.env.SMTP_PASS!,
        },
    });

    await transporter.sendMail({
        from: process.env.FROM_EMAIL!,
        to: process.env.TO_EMAIL!,
        subject: `Portfolio Message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ok: true});
}