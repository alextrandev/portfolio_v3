import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { name, email, subject, message } = await req.json().then((body) => sendRouteSchema.parse(body));

  const { data, error } = await resend.emails.send({
    from: 'Sender <sender@alextran.dev>',
    to: ['reciever@alextran.dev'],
    subject: `Contact request from ${name} at ${email}`,
    text: `Message from ${name} at ${email}. Subject: ${subject}. Message: ${message}`,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
