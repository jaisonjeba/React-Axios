import React, { useState, useEffect } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from './userService';
import UserList from './UserList';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleAddUser = async (user) => {
    const response = await addUser(user);
    setUsers([...users, response.data]);
  };

  const handleUpdateUser = async (id, user) => {
    const response = await updateUser(id, user);
    setUsers(users.map((u) => (u.id === id ? response.data : u)));
    setSelectedUser(null);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        addUser={handleAddUser}
        selectedUser={selectedUser}
        updateUser={handleUpdateUser}
      />
      <UserList
        users={users}
        deleteUser={handleDeleteUser}
        editUser={handleEditUser}
      />
    </div>
  );
};

export default App;
