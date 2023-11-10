'use client'
import React, {useEffect, useState} from "react";

const CSRComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://dummyjson.com/products?skip=5&limit=-1", {cache: 'no-store'});
                const apiData = await response.json();
                setData(apiData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();

    }, []);

    return (
        <div style={{background: "red"}}>
            <h5>This is CSR Component</h5>
            {/*<p>{JSON.stringify(data)}</p>*/}

            {data?.products?.map((item, index) => {
                return (
                    <h1>{item?.title}</h1>
                )
            })}


        </div>
    );
};

export default CSRComponent;
