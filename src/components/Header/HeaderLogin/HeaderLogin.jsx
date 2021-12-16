import React from 'react';
import { NavLink } from "react-router-dom"
import "../../../App.scss"

const HeaderLogin = ({ logout, ...props }) => {


    return (
        <div className="login-block">
            {props.isAuth
                ? <div className="login-block_name">
                    {props.login}
                    <button className="logout_btn" onClick={() => logout()}>Выйти</button>
                </div>
                : <NavLink to="/login"><div className="login-block_link">Войти</div></NavLink>
            }
        </div>
    );
};

export default HeaderLogin;