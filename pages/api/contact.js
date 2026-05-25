const { sendThankYouEmail } = require('../../lib/gmail');
const { appendToSheet } = require('../../lib/sheets');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Perform both actions in parallel
    await Promise.all([
      appendToSheet({ name, email, message }),
      sendThankYouEmail(email, name)
    ]);

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      message: 'Failed to process your request. Please try again later.' 
    });
  }
}
