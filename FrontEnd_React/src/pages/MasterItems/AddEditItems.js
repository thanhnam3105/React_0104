import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useItemsController } from "./ItemsController";
import { useParams } from "react-router-dom";

const AddEditItems = () => {
  const { id } = useParams();
  const { 
    newItem, 
    editItem, 
    handleCreate, 
    handleEdit, 
    handleCreateInputChange, 
    handleEditInputChange 
  } = useItemsController();

  const isEditMode = !!id;
  const item = isEditMode ? editItem : newItem;
  const handleSubmit = isEditMode ? handleEdit : handleCreate;
  const handleChange = isEditMode ? handleEditInputChange : handleCreateInputChange;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {isEditMode ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Tên sản phẩm"
          value={item.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mô tả"
          value={item.description}
          onChange={handleChange('description')}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {isEditMode ? "Lưu" : "Thêm"}
        </Button>
      </form>
    </Box>
  );
};

export default AddEditItems;
