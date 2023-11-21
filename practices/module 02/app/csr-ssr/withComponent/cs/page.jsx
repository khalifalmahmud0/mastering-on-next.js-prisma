// FACING ISSUE HERE

'use client'
// import React, {useEffect, useState} from 'react';
import SSRComponent from "@/app/csr-ssr/withComponent/(components)/ssr/page";


const Page = () => {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const res = await fetch('https://dummyjson.com/users?skip=5&limit=1');
    //         const resData = await res.json();
    //         setUsers(resData);
    //     })();
    // }, []);
    return (
        <div style={{background: "green"}}>
            <h5>This is CSR With SSR Component</h5>
            {/*<p>{JSON.stringify(users)}</p>*/}
            <SSRComponent/>
        </div>
    );
};

export default Page;