import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Sender <sender@alextran.dev>',
      to: [process.env.EMAIL],
      subject: `Contact request from ${name} at ${email}`,
      text: `Message from ${name} at ${email}. Subject: ${subject}. Message: ${message}`,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}