import React, { useEffect, useState } from "react";
import { fetchItems, deleteItem } from "../../services/api";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const data = await fetchItems();
    setItems(data);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Danh sách sản phẩm
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography color="textSecondary">{item.description}</Typography>
                <Button
                  component={Link}
                  to={`/edit/${item.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1, mr: 1 }}
                >
                  Sửa
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: 1 }}
                  onClick={() => deleteItem(item.id).then(loadItems)}
                >
                  Xóa
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
