import {NextResponse} from "next/server";
import {headers} from "next/headers";

export const GET = async (req, res) => {
    let headersData = headers();

    return NextResponse.json({email: 'Dashboard Page Email:' + headersData.get('userEmail')});
};