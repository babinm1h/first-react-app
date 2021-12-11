import React from 'react';
import { Route, Routes } from 'react-router';
import DialogsContainer from '../../containers/DialogsContainer';
import ProfileContainer from '../../containers/ProfileContainer';
import UsersContainer from '../../containers/UsersContainer';
import Dialogs from '../../Dialogs/Dialogs';
import Music from '../../Music/Music';
import News from '../../News/News';
import Profile from '../../Profile/Profile';
import Users from '../../Users/Users';
import ErrorPage from './ErrorPage';
import Login from "../../Login/Login"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRoutes;