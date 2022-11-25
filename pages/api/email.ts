import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

interface ResponseData {
    message: string;
    data: Mail;
    error?: string;
}

const handler = nc({
    onError: (err, _req: NextApiRequest, res: NextApiResponse<ResponseData>, _next) => {
        console.error(err.stack);
        res.status(500).end("Error: ", err);
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page not found");
    },
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const emailData = req.body;
        let transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME || "contact@aldevelop.com",
                pass: process.env.EMAIL_PASSWORD || "password123",
            },
        });

        let html = "<h1>Website Contact Form</h1>";
        html += `<b>From:</b> ${emailData.name} <a href="mailto:${emailData.email}">${emailData.email}</a>`;
        html += "<br />";
        html += `<b>Date</b>: ${new Date().toString()}`;
        html += "<br />";
        html += `<p>${emailData.body}</p>`;

        const info = await transporter.sendMail({
            from: `"${emailData.name}" <${process.env.EMAIL_USERNAME || "contact@aldevelop.com"}>`,
            to: "alex@aldevelop.com",
            subject: `[aldevelop.com] ${emailData.subject}`,
            html,
        });

        res.status(200).json({
            message: "Email Sent",
            data: info,
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error",
            error: e,
        });
    }
});

export default handler;
