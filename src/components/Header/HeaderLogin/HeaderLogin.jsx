import React from 'react';
import { NavLink } from "react-router-dom"

const HeaderLogin = (props) => {


    return (
        <div className="login-block">
            {props.isAuth
                ? <div className="login-block_name">{props.login}</div>
                : <NavLink to="/login"><div className="login-block_link">Войти</div></NavLink>
            }
        </div>
    );
};

export default HeaderLogin;