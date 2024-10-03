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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = contactFormSchema.parse(body);
    const { name, email, username, topic, message } = parsedData;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const msg = {
      to: email,
      from: 'test@ivpay.io',
      subject: 'Message from website',
      text: message,
    };

    const response = await sendgrid.send(msg);
    console.log('SendGrid response:', response);

    if (response[0].statusCode === 202) {
      return NextResponse.json({ success: true, message: 'Subscription successful!' });
    } else {
      console.error('Unexpected SendGrid status code:', response[0].statusCode);
      return NextResponse.json({ error: 'Subscription failed!' }, { status: 500 });
    }
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    console.error('SendGrid error:', error.response ? error.response.body : error);
    return NextResponse.json({ error: 'Subscription failed!' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'API is healthy' });
}