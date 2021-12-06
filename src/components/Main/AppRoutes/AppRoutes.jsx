import React from 'react';
import { Route, Routes } from 'react-router';
import Dialogs from '../../Dialogs/Dialogs';
import Music from '../../Music/Music';
import News from '../../News/News';
import Profile from '../../Profile/Profile';
import Users from '../../Users/Users';
import ErrorPage from './ErrorPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />

            <Route path="/" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRoutes;