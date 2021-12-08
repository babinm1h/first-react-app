import React from 'react';
import cl from "./common.module.scss"


const MyTitle = ({ children, ...props }) => {
    return (
        <div className={cl.default_title} {...props}>
            {children}
        </div>
    );
};

export default MyTitle;