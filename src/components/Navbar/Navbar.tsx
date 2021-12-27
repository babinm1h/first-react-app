import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import { CgProfile, CgMail } from "react-icons/cg";
import { RiUserSearchLine } from "react-icons/ri"

type NavLinkItem = {
    icon: any,
    text: string,
    path: string
}


const Navbar = () => {

    let linksArray: NavLinkItem[] = [
        { icon: <CgProfile size={21} />, text: `Профиль`, path: "/profile" },
        { icon: <CgMail size={21} />, text: `Сообщения`, path: "/dialogs" },
        { icon: <RiUserSearchLine size={21} />, text: `Пользователи`, path: "/users" },
    ]


    return (

        <nav className="nav">
            <ul className="nav_row">
                <NavbarLinks linksArray={linksArray} />
            </ul>
        </nav>

    );
};


type NavbarLinksProps = {
    linksArray: any
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ linksArray }) => {
    return (
        linksArray.map((item: NavLinkItem) => <li className="nav_item" key={item.text}>
            <NavLink to={item.path} className="nav_link">
                <span>{item.icon}</span> {item.text}
            </NavLink>
        </li>
        )
    )
}


export default Navbar;