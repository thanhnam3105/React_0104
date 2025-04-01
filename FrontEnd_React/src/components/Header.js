import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Quản lý Sản phẩm
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Trang chủ
        </Button>
        <Button color="inherit" component={Link} to="/create">
          Thêm sản phẩm
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;