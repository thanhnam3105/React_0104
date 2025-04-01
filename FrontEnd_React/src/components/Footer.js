import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2, bgcolor: "#f5f5f5", mt: 4 }}>
      <Typography variant="body2">&copy; 2025 Quản lý Sản phẩm</Typography>
    </Box>
  );
};

export default Footer;