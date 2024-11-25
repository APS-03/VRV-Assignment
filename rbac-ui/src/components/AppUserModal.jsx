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
import { Modal, Box, TextField } from "@mui/material";
import "../App";

const AddUserModal = ({ onClose }) => {    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add user logic
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box style={{ padding: 20, backgroundColor: "white", margin: "auto", top: "25%", position: "absolute", left: "25%" }}>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" />
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
