import React from 'react';
import './styles.scss';

const Layout = ({children}) => {
    return (
        <div className="home-page">
            {children}
        </div>
    );
};

export default Layout;