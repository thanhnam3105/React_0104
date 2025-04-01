import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchItemById, updateItem } from "../../services/api";
import { TextField, Button, Box, Typography } from "@mui/material";

const Edit = () => {
  const { id } = useParams();
  const [item, setItem] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchItemById(id).then(setItem);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(item);
    navigate("/");
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Chỉnh sửa sản phẩm
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Tên sản phẩm"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mô tả"
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Lưu
        </Button>
      </form>
    </Box>
  );
};

export default Edit;
