export const generateMetadata = async () => {
    let metaData;
    try {
        let data = await fetch(process.env.API_URL+'SiteMeta/projects')
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
const Layout = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;