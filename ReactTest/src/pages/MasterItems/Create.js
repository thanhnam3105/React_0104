import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../services/api";
import { TextField, Button, Box, Typography } from "@mui/material";

const Create = () => {
  const [newItem, setNewItem] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(newItem);
    navigate("/");
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Thêm sản phẩm
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Tên sản phẩm"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mô tả"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Thêm
        </Button>
      </form>
    </Box>
  );
};

export default Create;