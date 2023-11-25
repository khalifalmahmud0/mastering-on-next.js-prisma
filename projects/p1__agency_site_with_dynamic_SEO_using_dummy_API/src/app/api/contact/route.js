import {NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {console} from "next/dist/compiled/@edge-runtime/primitives";

export const POST = async (req,res) => {
    let ContactInfo = await req.json();
    let {name,email,message} = ContactInfo;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gadgets.khalif@gmail.com',
            pass: 'BlackDon251996'
        }
    });
    const mailOptions = {
        from: 'Agency Website <gadgets.khalif@gmail.com> ',
        to: email,
        subject: `${name} - Email`,
        text: `${message}`,

    };
    let result = await transporter.sendMail(mailOptions);
    return NextResponse.json({
        result,
        status:'success'
    });
}