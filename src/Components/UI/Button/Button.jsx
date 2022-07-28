import React from 'react';
import "./styles.scss";

function Button({type,modifier,children}) {
    return (
        <button type={type} className={`${modifier}-button`}>
            {children}
        </button>
    );
}

export default Button;