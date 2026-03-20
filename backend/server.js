require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.port || 3000;

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

// Initialize Twilio client
let client;
try {
    if (accountSid && authToken) {
        client = twilio(accountSid, authToken);
        console.log('✓ Twilio initialized successfully');
        console.log('✓ SMS will be sent to:', myPhoneNumber);
    } else {
        console.log('⚠ Twilio credentials missing - SMS disabled');
    }
} catch (error) {
    console.error('✗ Twilio initialization error:', error.message);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the frontend directory
const path = require('path');
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Handle form submission
app.post('/send-message', (req, res) => {
    const { name, mobile, Collections, message } = req.body;

    const smsBody = `New message from ${name} (${mobile}):\n\nCollections: ${Collections}\n\nMessage: ${message}`;

    if (!client) {
        console.log('Form submission (no SMS - Twilio not configured):', smsBody);
        res.status(200).send({ success: true, message: 'Message received (Twilio not configured)' });
        return;
    }

    client.messages
        .create({
            body: smsBody,
            from: twilioPhoneNumber,
            to: myPhoneNumber
        })
        .then(message => {
            console.log('✓ SMS sent successfully! ID:', message.sid);
            res.status(200).send({ success: true, message: 'Message sent successfully!' });
        })
        .catch(error => {
            console.error('✗ Error sending SMS:', error.message);
            console.error('  Twilio error code:', error.code);
            console.error('  More info:', error.moreInfo);
            res.status(500).send({ success: false, message: 'Failed to send message. Check server logs for details.' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
