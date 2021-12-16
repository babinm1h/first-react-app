import React from 'react';
import MenuBurger from '../Navbar/MenuBurger/MenuBurger'
import Navbar from "../Navbar/Navbar"
import AppRoutes from './AppRoutes/AppRoutes';
import { isMobile, } from 'react-device-detect';


const Main = () => {
    return (
        <div className="container">
            <div className="main">

                {isMobile ? <MenuBurger /> : <Navbar />}

                <div className="main_content">
                    <AppRoutes />
                </div>
            </div>

        </div>

    );
};

export default Main;