const { google } = require('googleapis');

const appendToSheet = async (data) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.SHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [data.name, data.email, data.message, new Date().toISOString()]
        ],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Sheets Error:', error);
    throw error;
  }
};

module.exports = { appendToSheet };
