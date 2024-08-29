import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  return axios.get(API_URL);
};

export const getUserById = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addUser = async (userData) => {
  console.log(userData);
  return axios.post(API_URL, userData);
};

export const updateUser = async (id, userData) => {
  return axios.put(`${API_URL}/${id}`, userData);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
