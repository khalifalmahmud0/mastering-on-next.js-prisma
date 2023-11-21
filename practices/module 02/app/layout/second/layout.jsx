import React from 'react';

const Layout = ({children}) => {
    return (
        <>
            <p>{'Second Layout'}</p>
            {children}
        </>
    );
};

export default Layout;