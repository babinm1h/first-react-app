import React from 'react';
import { connect } from 'react-redux';
import Users from '../Users/Users';
import { setCurrentPage } from '../../action/actionCreators';
import Preloader from "../common/Preloader/Preloader"
import { getUsers, follow, unfollow, } from '../../thunks/thunks';
import { compose } from 'redux';
import { UserType } from '../../types/usersTypes';
import { AppStateType } from '../../redux/store';

interface UsersContainerProps {
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
    getUsers: (currentPage: number, pageSize: number) => void,
    isLoading: boolean
}


export const UsersContainer: React.FC<UsersContainerProps> = (props) => {

    React.useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])


    const onPageChange = (pageNum: number) => {
        props.setCurrentPage(pageNum)
        props.getUsers(pageNum, props.pageSize)
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
                followProgress={props.followProgress}
            />
        </>
    );
};


type mapStateToPropsType = {
    users: UserType[],
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    isLoading: boolean,
    followProgress: number[]
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        followProgress: state.usersPage.followProgress
    }
}



export default compose(
    connect(mapStateToProps, { setCurrentPage, getUsers, follow, unfollow })
)(UsersContainer)