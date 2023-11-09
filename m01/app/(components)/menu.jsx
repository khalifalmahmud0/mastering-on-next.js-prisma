import Link from 'next/link'
import React from 'react'
function Menu() {
    return (
        <>
            <ul>
                <li>
                    <Link href={{ pathname: "/menu/a", query: { name: 'Khalif', age: 28 } }}>A</Link>
                </li>
                <li>
                    <Link href={{ pathname: "/menu/b", query: { name: 'sakib', location: 'dhaka' } }} replace>B</Link>
                </li>
                <li>
                    <Link href="/menu/c" prefetch={false}>C</Link>
                </li>
            </ul>
        </>
    )
}
export default Menu