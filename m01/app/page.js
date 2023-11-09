import React from "react";
import moduleStyle from "./style.module.css";
const page = () => {
	return (
		<>
			<h1>Allah Is Almighty</h1>
			<img src={"vercel.svg"} width={100} />
			<h1 className="styleFromGlobal">Style From Global CSS</h1>
			<h1 className={moduleStyle.styleFromModule}>Style from Module CSS</h1>
		</>
	);
};
export default page;
