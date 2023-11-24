import {Inter} from 'next/font/google';
import './globals.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({subsets: ['latin']});

export const generateMetadata = async () => {
    let metaData;
    try {
        let data = await fetch(process.env.API_URL+'SiteMeta/home')
        metaData = await data.json();
    } catch (e) {
        throw new Error("metaData Fetching Fail!");
    }

    return {
        title: metaData[0].title,
        description:metaData[0].description,
        keywords:metaData[0].keywords,
        openGraph:{
            images:metaData[0].image
        }
    }
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>

        <Header/>
        {children}
        {/*<NextTopLoader/>*/}
        <Footer/>
        </body>
        </html>
    );
}
