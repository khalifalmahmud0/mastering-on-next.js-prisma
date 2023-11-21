import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req,res) => {
    let {searchParams} = new URL(req.url);
    let email = searchParams.get('email');
    // setup email sending code Start
    let transporter = nodemailer.createTransport({
        // service: "gmail",
        // host: "smtp.gmail.com",
        host: "mail.teamrabbil.com",
        // port: 587,
        port: 25,
        secure: false,
        auth: {
            // user: "gadgets.khalif@gmail.com",
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs",
        }
    });
    const mailOptions = {
        from: 'NextJS Prisma <info@teamrabbil.com> ',
        to: email,
        subject: 'Your Email Subject NextJS Prisma',
        text: 'Your email content in plain text NextJS Prisma',

    };
    let result = await transporter.sendMail(mailOptions);
    // setup email sending code End
    return NextResponse.json({
        message:'This Is Test Message From Email API',
        email:result
    },{});
}