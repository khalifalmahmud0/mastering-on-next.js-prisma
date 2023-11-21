import React from 'react';

const Layout = ({children}) => {
    return (
        <>
            <p>{'Layout > layout.jsx'}</p>
            {children}
        </>
    );
};

export default Layout;