'use client'
import React, {useEffect, useState} from 'react';
import CSRComponent from "@/app/csr-ssr/withComponent/(components)/csr/page";

const Page = () => {
    let [users,setUsers] = useState([]);
    useEffect(() => {
        (async ()=>{
            let res = await fetch('https://dummyjson.com/users?skip=5&limit=1');
            let resData = await res.json();
            setUsers(resData);
        })();
    }, []);
    return (
        <div style={{background:"green"}}>
            <h5>This is CSR With CSR Component</h5>
            <p>{JSON.stringify(users)}</p>
            <CSRComponent/>
        </div>
    );
};

export default Page;