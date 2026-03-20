const twilio = require('twilio');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

  const { name, mobile, Collections, message } = req.body;

  const accountSid  = process.env.TWILIO_ACCOUNT_SID;
  const authToken   = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
  const myPhone     = process.env.MY_PHONE_NUMBER;

  if (!accountSid || !authToken) {
    console.log('Twilio not configured — message received:', { name, mobile });
    return res.status(200).json({ success: true, message: 'Message received (Twilio not configured)' });
  }

  const smsBody = `New message from ${name} (${mobile}):\n\nCollections: ${Collections}\n\nMessage: ${message}`;

  try {
    const client = twilio(accountSid, authToken);
    await client.messages.create({ body: smsBody, from: twilioPhone, to: myPhone });
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('SMS error:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to send message' });
  }
};
