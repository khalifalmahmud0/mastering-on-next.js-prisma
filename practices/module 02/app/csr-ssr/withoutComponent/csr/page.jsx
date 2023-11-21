'use client'
import React, {useEffect, useState} from 'react';

const Page = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        (async () => {
            const res = await fetch('https://dummyjson.com/posts');
            const resData = await res.json();
            setData(resData);
        })();
    },[])
    return (
        <div>
            <h5>This is CSR Without Component</h5>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Page;