
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/contact', async (req, res) => {
    const { email, message } = req.body;

    const username = process.env.BURNER_USERNAME;
    const password = process.env.BURNER_PASSWORD;
    const myEmail = process.env.PERSONAL_EMAIL;

    if (!username || !password || !myEmail) {
        console.error('Missing environment variables for email configuration');
        return res.status(500).json({ message: 'Server configuration error.' });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: username,
            pass: password,
        },
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
    });

    try {
        await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `,
        });
        res.status(200).json({ message: 'Success: email was sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Could not send message' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
