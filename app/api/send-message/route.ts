import z from 'zod'
import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(2)
    .max(50),
  email: z
    .string({
      required_error: "Please enter your email",
    })
    .email()
    .min(2)
    .max(50),
  username: z.string({}).min(2).max(50).optional(),
  topic: z.string({
    required_error: "Please choose a topic",
  }),
  message: z
    .string({
      required_error: "Message is required",
    })
    .max(255),
});

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    // Parse incoming request data
    const body = await request.json();
    const parsedData = contactFormSchema.parse(body);
    const { name, email, username, topic, message } = parsedData;

    // Validate email
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Prepare messages
    const escapeHTML = (text: string | undefined) => {
      if (text == undefined) return null
      return text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
  };
  
  // text fallback
  const textdMessage = `
  Name: ${name}
  Email: ${email}
  Phone: ${username}
  Subject: ${topic}
  Message: ${message}
  
  This message was sent from [IVPAY] 
  `.trim();

  // HTML for SendGrid
  const htmlMessage = `
  <b>Name:</b> ${escapeHTML(name)}<br>
  <b>Email:</b> ${escapeHTML(email)}<br>
  <b>Phone:</b> ${escapeHTML(username)}<br>
  <b>Subject:</b> ${escapeHTML(topic)}<br>
  <b>Message:</b> ${escapeHTML(message)}<br>
  <br>
  This message was sent from <i>IVPAY</i>
  `.trim();

  // /n indead of <br> for Telegram
  const telegramMessage = `
  <b>Name:</b> ${escapeHTML(name)}
  <b>Email:</b> ${escapeHTML(email)}
  <b>Phone:</b> ${escapeHTML(username)}
  <b>Subject:</b> ${escapeHTML(topic)}
  <b>Message:</b> ${escapeHTML(message)}
  
  This message was sent from <i>IVPAY</i>
  `.trim();

  // Send email using SendGrid
  const msg = {
    to: ['support@ivpay.io', email],
    from: 'support@ivpay.io',
    subject: 'Request from the website',
    text: textdMessage,
    html: `<div style="font-family: Arial, sans-serif;">${htmlMessage}</div>`,
    replyTo: email
  };

    const emailResponse = await sendgrid.send(msg);
    console.log('SendGrid response:', emailResponse);

    // Check email response
    if (emailResponse[0].statusCode !== 202) {
      console.error('Unexpected SendGrid status code:', emailResponse[0].statusCode);
      return NextResponse.json({ error: 'Failed to send message to email!' }, { status: 500 });
    }

    // Prepare to send message to Telegram
    const token = process.env.TELEGRAM_TOKEN;
    const chat_id = process.env.CHAT_ID;
    const reply_to_message_id = '3422';

    const url_req = `https://api.telegram.org/bot${token}/sendMessage`;
    const telegramData = {
      chat_id: chat_id,
      parse_mode: 'html',
      disable_web_page_preview: true,
      reply_to_message_id: reply_to_message_id,
      text: telegramMessage,
    };

    // Send message to Telegram
    const telegramResponse = await fetch(url_req, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(telegramData),
    });

    // Handle Telegram response
    if (telegramResponse.ok) {
      const result = await telegramResponse.json();
      console.log('Telegram response:', result);
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } else {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json({ error: 'Failed to send message to Telegram!' }, { status: 500 });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred!' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'API is healthy' });
}
