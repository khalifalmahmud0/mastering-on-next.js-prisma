import { NextResponse } from "next/server";
import { headers } from "next/headers";
import {console} from "next/dist/compiled/@edge-runtime/primitives";
export const GET = async (req, res) => {

	// Way to get Query Params from Request
	let { searchParams } = new URL(req.url);
	let nameFromParamUrl = searchParams.get("name");

	return NextResponse.json(
		{
			status: 200,
			message: "I am From AP Route Page",
			paramsData: nameFromParamUrl,
		},
		{}
	);
};
// Get Dia URL Params Pathano jai BUT BUT body pathano jai na. Body Pathanor jnno lagbe POST
// ake satha formData() & json() use kora jabe na. je kono akta kora jabe
export const POST = async (req, res) => {
	// formdata
	// let formDataValues = await req.formData();
	// let company = formDataValues.get("company");

	// Way to get body data from Request
	// let bodyData = await req.json(); // receive data from request body

	// Header Data
	let headersData = headers();
	// console.log(headersData);
	let name = headersData.get("name");

	// Cookie
	const cookiePractice = req.cookies;


	return NextResponse.json(
		{
			status: 204,
			// body:bodyData,
			// formData: company,
			head: name,
			cookie: cookiePractice.get('age'),

		},
		{ status: 201,
			headers:{
				'Set-Cookie': `country=bangladesh`
			}
		} // manual status code send
	);
};
