let products = async () => {
    let response = await fetch('https://dummyjson.com/products');
    let items = await response.json();
    return items.products;
}
let page = async () => {
    let data = await products();
    return (
        <>
            {/* {JSON.stringify(data)} */}
            <ul>
                {data?.map((item, index) => {
                    return (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            {/* <img src={item.thumbnail} /> */}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default page