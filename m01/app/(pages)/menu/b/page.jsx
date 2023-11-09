'use client'
import { useSearchParams } from 'next/navigation';
function page() {
    let searchParams = useSearchParams();
    let name = searchParams.get('name');
    return (
        <>
            <div>CSR : {name}</div>
        </>
    )
}
export default page