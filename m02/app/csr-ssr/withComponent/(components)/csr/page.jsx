'use client'
import React, { useEffect, useState } from "react";

const Page = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const apiData = await response.json();
                setData(apiData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();

    }, []);

    return (
        <div>
            <h5>This is CSR Component</h5>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>rating</th>
                    <th>stock</th>
                </tr>
                </thead>
                <tbody>
                {data.products?.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <img src={item.thumbnail} width={100} />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.rating}</td>
                        <td>{item.stock}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/*<p>{JSON.stringify(data)}</p>*/}
        </div>
    );
};

export default Page;
