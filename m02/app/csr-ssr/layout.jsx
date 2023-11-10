import React from 'react';
import Link from "next/link";

const Layout = ({children}) => {
    return (
        <>
            <p>{'csr-ssr > layout'}</p>
            <ul>
                <hr/>
                <li>
                    <Link href="/csr-ssr/withComponent/csr">CSR Component</Link>
                </li>
                <li>
                    <Link href="/csr-ssr/withComponent/ssr">SSR Component</Link>
                </li>
                <hr/>
                <li>
                    <Link href="/csr-ssr/withComponent/cc">CSR in CSR</Link>
                </li>
                <li>
                    <Link href="/csr-ssr/withComponent/cs">CSR in SSR</Link>
                </li>
                <hr/>
                <li>
                    <Link href="/csr-ssr/withComponent/sc">SSR in CSR</Link>
                </li>
                <li>
                    <Link href="/csr-ssr/withComponent/ss">SSR in SSR</Link>
                </li>
                <hr/>
            </ul>
            {children}
        </>
    );
};

export default Layout;