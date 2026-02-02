import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { email, message } = req.body;

    const username = process.env.BURNER_USERNAME;
    const password = process.env.BURNER_PASSWORD;
    const myEmail = process.env.PERSONAL_EMAIL;

    if (!username || !password || !myEmail) {
        console.error("Missing environment variables for email configuration");
        return res.status(500).json({ message: "Server configuration error." });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
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

        return res.status(200).json({ message: "Success: email was sent" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Could not send message" });
    }
}
