import React from 'react';
import { UserType } from '../../../types/usersTypes';
import UserItem from './UserItem/UserItem';

type UsersListProps = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    users: UserType[],
    followProgress: number[],
}

const UsersList: React.FC<UsersListProps> = ({ follow, unfollow, users, followProgress }) => {
    return (
        <div className="users">
            <div className="users_row">
                {users.map(u => <UserItem follow={follow} unfollow={unfollow} user={u}
                    key={u.id}
                    followProgress={followProgress}
                />)}
            </div>
        </div>
    );
};

export default UsersList;