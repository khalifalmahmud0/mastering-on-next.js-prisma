import {NextResponse} from "next/server";
import {jwtVerify, SignJWT} from "jose";

let secrateKey = new TextEncoder().encode(process.env.JWT_SECRATE_KEY);
export const GET = async (req, res) => {
    let payLoad = {
        email: 'almahmudkhalif@gmail.com',
    };

    let token = await new SignJWT(payLoad).setProtectedHeader({alg: 'HS256'}).setIssuedAt().setIssuer('localhost:3000').setExpirationTime(3000).sign(secrateKey);
    return NextResponse.json({key: token}, {});
};

export const POST = async (req, res) => {
    let data = await req.json();
    let token = data['token'];
    let finalData = await jwtVerify(token, secrateKey);
    return NextResponse.json({data: finalData}, {});
};