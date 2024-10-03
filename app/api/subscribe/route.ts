import z from 'zod'
import { NextResponse } from 'next/server';
import { Client } from '@sendgrid/client';
import { ClientRequest } from '@sendgrid/client/src/request';

// Initialize SendGrid client
const client = new Client();
client.setApiKey(process.env.SENDGRID_API_KEY || '');

const subscriptionFormSchema = z.object({
  email: z.string().email().min(2).max(50),
});

export async function POST(request: Request) {
  try {
    // Parse incoming request body
    const dangerousData = await request.json();
    const parsedData = subscriptionFormSchema.parse(dangerousData);
    const { email } = parsedData;

    //console.log('Received email:', email);

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const data = {
      contacts: [
        {
          email: email,
        },
      ],
    };

    // Prepare SendGrid request
    const sgRequest: ClientRequest = {
      url: '/v3/marketing/contacts',
      method: 'PUT' as const,
      body: data,
    };

    // Send request to SendGrid
    const [response, body] = await client.request(sgRequest);

    //console.log('SendGrid response status code:', response.statusCode);
    //console.log('SendGrid response:', response);

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return NextResponse.json({ success: true, message: 'Contact successfully added!', body }, { status: 200 });
    } else {
      console.error('SendGrid error response:', body);
      return NextResponse.json({ success: false, error: 'Failed to add contact', body }, { status: response.statusCode });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    console.error('Error creating contact:', error);
    return NextResponse.json({ success: false, error: 'Failed to create contact' }, { status: 500 });
  }
}
