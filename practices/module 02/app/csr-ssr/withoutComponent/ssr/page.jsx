let response = async () => {
    try {
        const res = await fetch('https://dummyjson.com/posts');
        const resData = res.json();
        return resData;
    }catch(e){
        console.error('Error Occurred')
    }
}
const Page = async () => {
    let data = await response();
    return (
        <div>
            <h5>This is SSR Without Component</h5>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Page;