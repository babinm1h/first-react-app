import React from 'react';
import "./Header.scss"
import HeaderLogin from './HeaderLogin/HeaderLogin';


const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src="https://img-cdn.hltv.org/teamlogo/JMeLLbWKCIEJrmfPaqOz4O.svg?ixlib=java-2.1.0&s=c02caf90234d3a3ebac074c84ba1ea62" alt="logo" />
                    </div>

                    <HeaderLogin login={props.login} isAuth={props.isAuth} />
                </div>
            </div>
        </header>
    );
};

export default Header;