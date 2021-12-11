import React from 'react';
import UserItem from './UserItem/UserItem';

const UsersList = ({ follow, unfollow, users, followingProgress, followProgress }) => {
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