import React from 'react';

const UserCard = ({ user, deleteUser, editUser }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>CatchPhrase: {user.company.catchPhrase}</p>
      <p>BS: {user.company.bs}</p>
      <button onClick={() => editUser(user)}>Edit</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
