import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req, res) => {
    try {
        const { name, email, message } = await req.json();

        // Use environment variables for sensitive information
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: 'Agency Website <process.env.EMAIL_USER>',
            to: email,
            subject: `${name} - Email`,
            text: `${message}`,
        };

        // Send the email
        const result = await transporter.sendMail(mailOptions);

        // Check if the email was sent successfully
        if (result.accepted.length > 0) {
            return NextResponse.json({
                status: 'success',
                message: 'Email sent successfully'
            });
        } else {
            throw new Error('Failed to send email');

        }
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            status: 'fail',
            message: 'Failed to send email'
        });
    }
};
