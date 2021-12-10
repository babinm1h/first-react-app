import React from 'react';
import { connect } from 'react-redux';
import Users from '../Users/Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsLoading } from '../../action/actionCreators';
import { usersAPI } from '../../API/usersApi';
import Preloader from "../common/Preloader/Preloader"

export const UsersContainer = (props) => {

    React.useEffect(() => {
        props.setIsLoading(true)
        usersAPI.getUsers(props.currentPage, props.pageSize)
            .then(response => {
                props.setIsLoading(false)
                props.setUsers(response.items);
                props.setTotalCount(response.totalCount = 107)
            })
    }, [])


    const onPageChange = (pageNum) => {
        props.setIsLoading(true)
        props.setCurrentPage(pageNum)
        usersAPI.getUsers(pageNum, props.pageSize)
            .then(resp => {
                props.setIsLoading(false)
                props.setUsers(resp.items)
            })
    }

    return (
        <>
            {props.isLoading ? <Preloader /> : null}
            <Users
                users={props.users}
                currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                follow={props.follow}
                unfollow={props.unfollow}
                setUsers={props.setUsers}
                setCurrentPage={props.setCurrentPage}
                onPageChange={onPageChange}
                setTotalCount={props.setTotalCount}
            />
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
    }
}

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsLoading }
)(UsersContainer);