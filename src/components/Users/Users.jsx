import React from 'react';
import UsersList from './UsersList/UsersList';
import "./Users.scss"
import { usersAPI } from '../../API/usersApi';
import { setCurrentPage } from '../../action/actionCreators';


const Users = ({ follow, unfollow, users, setUsers, ...props }) => {



    let pages = []
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }




    return (
        <>
            <div className="pagination">
                {pages.map(p => <span onClick={() => props.onPageChange(p)}
                    className={props.currentPage === p
                        ? "pagination_page selected_page"
                        : "pagination_page"
                    }>
                    {p}
                </span>)}
            </div>

            <UsersList follow={follow} unfollow={unfollow} users={users} />
        </>
    );
};

export default Users;