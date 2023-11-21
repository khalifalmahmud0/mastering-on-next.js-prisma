import React from 'react'
function page({ searchParams }) {
    console.log(searchParams.name);
    return (
        <>
            <div>SSR : {searchParams.name}</div>
        </>
    )
}
export default page