import {NextResponse} from "next/server";
import {SignJWT} from "jose";

let secretKey = new TextEncoder().encode(process.env.JWT_SECRATE_KEY);
export const POST = async (req, res) => {
    let reqData = await req.json();
    let email = reqData['email'];
    let password = reqData['password'];
    if (email === 'almahmudkhalif@gmail.com' && password === 'abcd@1234') {
        let payload = {
            email,
            password,
        };
        let token = await new SignJWT(payload).setProtectedHeader({alg: 'HS256'}).sign(secretKey);
        return NextResponse.json({
            msg: 'I am From Login Page',
            req: token,
        }, {});
    } else {
        return NextResponse.json({
            msg: 'Login Fail',
        }, {status: 401});
    }

};