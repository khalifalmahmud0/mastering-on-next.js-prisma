import {NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {console} from "next/dist/compiled/@edge-runtime/primitives";

export const POST = async (req,res) => {
    let {name,email,message} = await req.json();
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techlabpro35@gmail.com',
            pass: 'khalif12345'
        }
    });
    const mailOptions = {
        from: 'Agency Website <techlabpro35@gmail.com> ',
        to: email,
        subject: `${name} - Email`,
        text: `${message}`,
    };
    try {
        let result = await transporter.sendMail(mailOptions);
        return NextResponse.json({
            result,
            status:'success'
        });
    }catch (e) {
        return NextResponse.json({
            status:'Fail'
        });
    }
}