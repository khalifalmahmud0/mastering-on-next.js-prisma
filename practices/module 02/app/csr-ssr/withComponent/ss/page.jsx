import CSRComponent from "@/app/csr-ssr/withComponent/(components)/csr/page";
import SSRComponent from "@/app/csr-ssr/withComponent/(components)/ssr/page";

const Data = async () =>{
    try {
        let res = await fetch("https://dummyjson.com/users?skip=5&limit=1");
        let resdata = res.json();
        return resdata;
    }catch (e){
        console.log(e);
    }
}

const Page = async () => {
    let data = await Data();
    return (
        <div style={{background:"orange"}}>
            <h5>This is SSR With SSR Component</h5>
            <p>{JSON.stringify(data)}</p>
            <CSRComponent/>
            <SSRComponent/>
        </div>
    );
};

export default Page;