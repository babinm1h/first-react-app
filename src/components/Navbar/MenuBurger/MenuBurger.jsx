import React from 'react';
import { NavLink } from 'react-router-dom';

import { CgProfile, CgMail } from "react-icons/cg";
import { RiUserSearchLine } from "react-icons/ri"
import "./MenuBurger.scss"


const MenuBurger = () => {
    const [menuActive, setMenuActive] = React.useState(false)

    let linksArray = [
        { icon: <CgProfile size={21} />, text: `Профиль`, path: "/profile" },
        { icon: <CgMail size={21} />, text: `Сообщения`, path: "/dialogs" },
        { icon: <RiUserSearchLine size={21} />, text: `Пользователи`, path: "/users" },
    ]

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    return (
        <div className="menu">
            <HeaderMenuIcon toggleMenu={toggleMenu} />
            <div className={menuActive ? "menu-burger active" : "menu-burger"}>
                <nav className="menu-burger_nav">
                    <ul className="nav_row">
                        <NavbarLinks linksArray={linksArray} />
                    </ul>
                </nav>
            </div>
        </div>
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

const HeaderMenuIcon = ({ toggleMenu }) => {

    return (
        <div className="header_menu" onClick={toggleMenu}>
            <div className="menu_icon">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
                <span className="bar4"></span>
            </div>
        </div>

    )
}


export default MenuBurger;