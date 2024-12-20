import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const fetchRoles = () => axios.get(`${API_URL}/roles`);
export const addUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
export const addRole = (role) => axios.post(`${API_URL}/roles`, role);
export const updateRole = (id, role) => axios.put(`${API_URL}/roles/${id}`, role);
export const deleteRole = (id) => axios.delete(`${API_URL}/roles/${id}`);