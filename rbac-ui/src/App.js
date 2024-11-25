import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import AddUserModal from "./components/AppUserModal";
import "./App.css";
import UserTable from "./components/UserTable";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleStatusToggle = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" }
        : user
    );
    setUsers(updatedUsers);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: updatedUsers.find((user) => user.id === id).status,
      }),
    });
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
                        user.status === "ACTIVE" ? "active" : "inactive"
                      }`}
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
    <UserTable/>
  );
};

export default App;
