import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../api';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material';
import './Usertable.css';

const UserTable = ({ onEdit }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then((response) => setUsers(response.data));
    }, []);

    const handleDelete = (id) => {
        deleteUser(id).then(() => setUsers(users.filter((user) => user.id !== id)));
    };
  return (
        /*<div className="container">
        <div className="team-header">
            <h1>Team</h1>
            <Button
            className="add-user-btn"
            variant="contained"
            onClick={() => setIsModalOpen(true)}
            >
            Add User
            </Button>
            <TableContainer>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>2FA</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                    <TableCell>
                        <div>
                        <strong>{user.name}</strong>
                        <br />
                        <span>{user.email}</span>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div
                        className={`status-badge ${
                            user.status === "ACTIVE" ? "active" : "inactive"}`}
                        onClick={() => handleStatusToggle(user.id)}
                        >
                        {user.status}
                        </div>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user["2fa"] ? "✔" : "✖"}</TableCell>
                    <TableCell className="actions">
                        <Button
                        variant="text"
                        onClick={() => setIsModalOpen(true)}
                        >
                        Edit
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            {isModalOpen && <AddUserModal onClose={() => setIsModalOpen(false)} />}
        </div>
        </div>*/
    <div className='container'>
        <h1 className='heading'>VRV Security</h1>
        <div className='team-header'>
            <h2>Team</h2>
            <Button className="add-user-btn" variant='contained'>Add Member</Button>
        </div>
        
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map((user) => (
            <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className='status-active'>{user.status}</TableCell>
                <TableCell>
                <Button onClick={() => onEdit(user)}>Edit</Button>
                <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </div>
    
  );
};

export default UserTable;