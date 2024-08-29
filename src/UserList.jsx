import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </div>
  );
};

export default UserList;
