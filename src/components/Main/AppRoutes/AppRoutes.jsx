import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
// import DialogsContainer from '../../containers/DialogsContainer';
import Profile from '../../Profile/Profile';
import ErrorPage from './ErrorPage';
import LoginContainer from '../../containers/LoginContainer';
import Preloader from '../../common/Preloader/Preloader';

const ProfileContainer = React.lazy(() => import('../../containers/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('../../containers/DialogsContainer'))
const UsersContainer = React.lazy(() => import('../../containers/UsersContainer'))

const AppRoutes = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path="/profile" element={<ProfileContainer />}>
                    <Route path=":userId" element={<ProfileContainer />} />
                </Route>
                <Route path="/dialogs" element={<DialogsContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<LoginContainer />} />

                <Route path="/" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;