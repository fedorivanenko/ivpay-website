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
    .min(2)
    .max(255),
});

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request:Request) {
  try {
    // Parse incoming request data
    const body = await request.json();
    const parsedData = contactFormSchema.parse(body);
    const { name, email, username, topic, message } = parsedData;

    // Validate email
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send email using SendGrid
    const msg = {
      to: email,
      from: 'test@ivpay.io',
      subject: 'Message from website',
      text: message,
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
      text: message, 
      reply_to_message_id: reply_to_message_id,
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

/**
 
export async function POST(request) {
  const token = (process.env.TELEGRAM_TOKEN || '');
  const chat_id = (process.env.CHAT_ID || '');;
  
  try {
    const { message } = await request.json();
    const reply_to_message_id = '3422'; 

    const url_req = `https://api.telegram.org/bot${token}/sendMessage`;

    const data = {
      chat_id: chat_id,
      parse_mode: 'html',
      disable_web_page_preview: true,
      text: message,
      reply_to_message_id: reply_to_message_id,
    };

    const response = await fetch(url_req, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      return new Response(JSON.stringify({ success: true, data: result }), { status: 200 });
    } else {
      const errorData = await response.json();
      return new Response(JSON.stringify({ success: false, error: errorData }), { status: response.status });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

 */