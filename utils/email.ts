import mailer, { SentMessageInfo } from "nodemailer";

interface EmailResponse {
    info: SentMessageInfo;
    error: any;
}

const formatBody = (message: EmailData): string => {
    let text = "AL Development Website Contact Form\n\n";
    text += "\n";
    text += "Thank you for contacting, I will be with you shortly.\n";
    text += "\n";
    text += `From: ${message.firstName} ${message.lastName}\n`;
    text += `Date: ${new Date().toString()}\n`;
    text += `Subject: ${message.subject}\n\n`;
    text += message.body;
    text += "\n";
    return text;
};

export const sendEmail = async (message: EmailData): Promise<EmailResponse> => {
    try {
        let transporter = mailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME || "contact@aldevelop.com",
                pass: process.env.EMAIL_PASSWORD || "password123",
            },
        });

        const info = await transporter.sendMail({
            from: `"AL Development" <${
                process.env.EMAIL_USERNAME || "contact@aldevelop.com"
            }>`,
            to: `alex@aldevelop.com, ${message.email}`,
            subject: `[contact] ${message.subject}`,
            text: formatBody(message),
        });

        transporter.sendMail;
        return {
            info,
            error: null,
        };
    } catch (e) {
        return {
            info: null,
            error: e,
        };
    }
};
