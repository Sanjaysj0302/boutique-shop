require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || process.env.port || 3000;
const host = process.env.HOST || 'localhost';
const nodeEnv = process.env.NODE_ENV || 'development';

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

// Enable CORS for production deployment
app.use((req, res, next) => {
    const origin = req.headers.origin;
    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:5173',
        process.env.FRONTEND_URL, // For deployed frontend
        'https://nila-instyle.com', // Add your production domain
    ].filter(Boolean);

    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Serve static files from the React build
const path = require('path');
const frontendPath = path.join(__dirname, '../react-app/build');
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

// Fallback: serve React app for any non-API route (React Router support)
app.get('*', (_req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

const http = require('http');
const server = http.createServer({ maxHeaderSize: 32768 }, app);
server.listen(port, host, () => {
    const url = host === 'localhost'
        ? `http://localhost:${port}`
        : `http://${host}:${port}`;

    console.log(`\n🚀 Server is running on ${url}`);
    console.log(`📌 Environment: ${nodeEnv}`);
    console.log(`📍 Host: ${host}:${port}\n`);
});
