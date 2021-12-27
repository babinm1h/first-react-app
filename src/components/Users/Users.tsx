import React from 'react';
import UsersList from './UsersList/UsersList';
import "./Users.scss"
import Pagination from '../common/Pagination/Pagination';
import { UserType } from '../../types/usersTypes';

interface UsersProps {
    portionSize?: number,
    pageSize: number,
    totalUsersCount: number,
    onPageChange: (p: number) => void,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    users: UserType[],
    setUsers: () => void,
    followProgress: number[],
    setCurrentPage: (currentPage: number) => void,
}


const Users: React.FC<UsersProps> = ({ follow, unfollow, users, setUsers, ...props }) => {

    return (
        <>
            <Pagination totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
            />

            <UsersList follow={follow} unfollow={unfollow} users={users}
                followProgress={props.followProgress}
            />
        </>
    );
};

export default Users;