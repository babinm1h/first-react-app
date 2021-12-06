import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import { CgProfile, CgMail } from "react-icons/cg";
import { RiUserSearchLine, RiMusic2Line } from "react-icons/ri"
import { IoNewspaperOutline } from "react-icons/io5"



const Navbar = () => {
    return (

        <nav className="nav">
            <ul className="nav_row">
                <li className="nav_item">
                    <NavLink to="/profile" className="nav_link">
                        <span><CgProfile size={23} /></span> Профиль
                    </NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/dialogs" className="nav_link">
                        <span><CgMail size={21} fill={"blue"} /></span>  Сообщения
                    </NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/users" className="nav_link">
                        <span><RiUserSearchLine size={21} /></span>  Пользователи
                    </NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/music" className="nav_link">
                        <span><RiMusic2Line size={21} /></span> Музыка
                    </NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/news" className="nav_link">
                        <span><IoNewspaperOutline size={21} /></span>   Новости
                    </NavLink>
                </li>
            </ul>
        </nav>

    );
};




export default Navbar;