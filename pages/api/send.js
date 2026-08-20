import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 };

// returns a trimmed { name, email, subject, message } object or null when invalid
function validate(body) {
  if (typeof body !== 'object' || body === null) return null;

  const fields = {};
  for (const [field, maxLength] of Object.entries(LIMITS)) {
    const value = body[field];
    if (typeof value !== 'string') return null;
    const trimmed = value.trim();
    if (trimmed.length === 0 || trimmed.length > maxLength) return null;
    fields[field] = trimmed;
  }
  if (!EMAIL_REGEX.test(fields.email)) return null;
  return fields;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.EMAIL) {
    console.error('send.js: RESEND_API_KEY or EMAIL env var is not set');
    return res.status(500).json({ error: 'The contact form is not available right now.' });
  }

  const fields = validate(req.body);
  if (!fields) {
    return res.status(400).json({ error: 'Please fill in all fields with valid values.' });
  }

  try {
    const { name, email, subject, message } = fields;
    // keep the email body as plain text so user input can't inject HTML
    const { error } = await resend.emails.send({
      from: 'Sender <sender@alextran.dev>',
      to: [process.env.EMAIL],
      replyTo: email,
      subject: `Contact request from ${name}`,
      text: `Message from ${name} at ${email}.\nSubject: ${subject}\n\n${message}`,
    });

    if (error) {
      console.error('send.js: Resend error:', error);
      return res.status(502).json({ error: 'Failed to send the message. Please try again later.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('send.js:', error);
    return res.status(500).json({ error: 'Failed to send the message. Please try again later.' });
  }
}
