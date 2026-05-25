const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const path = require('path');

const OAuth2 = google.auth.OAuth2;

const sendThankYouEmail = async (userEmail, userName) => {
  try {
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.YOUR_GMAIL,
        accessToken,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN
      }
    });

    const mailOptions = {
      from: process.env.YOUR_GMAIL,
      to: userEmail,
      subject: "Thank you for reaching out!",
      text: `Hi ${userName},\n\nThank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.\n\nPlease find my resume attached.\n\nBest regards,\nNikita Bhilare`,
      attachments: [
        {
          filename: 'Nikita_Bhilare_Resume.pdf',
          path: path.join(process.cwd(), 'public', 'resume.pdf')
        }
      ]
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Gmail Error:', error);
    throw error;
  }
};

module.exports = { sendThankYouEmail };
