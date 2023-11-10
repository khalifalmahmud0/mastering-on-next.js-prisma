const Carts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/carts?skip=1&limit=1");
        const apiData = await response.json();
        return apiData;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


const SSRComponent = async () => {

    const cartdata = await Carts();


    return (
        <div style={{background:"pink"}}>
            <h5>This is SSR Component</h5>
            <p>{JSON.stringify(cartdata)}</p>
        </div>
    );
};

export default SSRComponent;
