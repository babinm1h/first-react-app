import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import { CgProfile, CgMail } from "react-icons/cg";
import { RiUserSearchLine, RiMusic2Line } from "react-icons/ri"
import { IoNewspaperOutline } from "react-icons/io5"



const Navbar = () => {


    let linksArray = [
        { icon: <CgProfile size={21} />, text: `Профиль`, path: "/profile" },
        { icon: <CgMail size={21} />, text: `Сообщения`, path: "/dialogs" },
        { icon: <RiUserSearchLine size={21} />, text: `Пользователи`, path: "/users" },
        { icon: <RiMusic2Line size={21} />, text: `Музыка`, path: "/music" },
        { icon: <IoNewspaperOutline size={21} />, text: `Новости`, path: "/news" },
    ]


    return (

        <nav className="nav">
            <ul className="nav_row">
                <NavbarLinks linksArray={linksArray} />
            </ul>
        </nav>

    );
};


const NavbarLinks = ({ linksArray }) => {
    return (
        linksArray.map(item => <li className="nav_item" key={item.text}>
            <NavLink to={item.path} className="nav_link">
                <span>{item.icon}</span> {item.text}
            </NavLink>
        </li>
        )
    )
}


export default Navbar;