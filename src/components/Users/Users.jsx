import React from 'react';
import UsersList from './UsersList/UsersList';
import "./Users.scss"
import Pagination from '../common/Pagination/Pagination';


const Users = ({ follow, unfollow, users, setUsers, ...props }) => {



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