import {NextResponse} from "next/server";
import {jwtVerify} from "jose";

let key = new TextEncoder().encode(process.env.JWT_SECRATE_KEY);
export const middleware = async (req, res) => {
    if (req.nextUrl.pathname.startsWith('/api/jwt-login-middleware/dashboard')) {
        try {
            // let headersData = headers();
            // Middleware theke header access korar niyom .. ai way to amra header get o korte parnbo
            let headersData = new Headers(req.headers);
            let token = headersData.get("token");
            let tokenVerification = await jwtVerify(token, key);
            let data = tokenVerification.payload;
            console.log(data.email);
            return NextResponse.next({
                headers: {
                    userEmail: data.email,
                },
            });
        } catch (e) {
            return NextResponse.json({msg: 'Auth Fail'});
        }
    }
};

