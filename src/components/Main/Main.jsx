import React from 'react';
import Navbar from '../Navbar/Navbar';
import AppRoutes from './AppRoutes/AppRoutes';



const Main = () => {
    return (
        <div className="container">
            <div className="main">
                <Navbar />

                <div className="main_content">
                    <AppRoutes />
                </div>
            </div>

        </div>

    );
};

export default Main;