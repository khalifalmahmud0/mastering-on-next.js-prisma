'use client'
import React, { useEffect, useState } from 'react'
function page() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            let response = await fetch('https://dummyjson.com/products');
            let items = await response.json();
            setData(items.products)
        })()
    }, []);
    return (
        <>
            {/* {JSON.stringify(data)} */}
            <ul>
                {data.map((item, index) => {
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