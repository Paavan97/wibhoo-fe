import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, incrementAsync, selectCount } from './cartSlice';
import Bottom from "/images/Top.png";
import Top from "/images/bottom.png";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  href: string;
  color: string;
  price: string;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Cart: React.FC = () => {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: "100%", marginTop: "100px" }}>
      <Box
        sx={{
          marginTop: "70px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Top} // Replace with the actual image path
          alt="Above Product Grid"
          style={{ width: "100%" }}
        />
      </Box>
      <Container sx={{ minWidth: "100%", bgcolor: "#12CD7E", p: 4 }}>
        <Typography
          sx={{ px: { md: 16, xs: "0" } }}
          variant="h4"
          component="h1"
          gutterBottom
        >
          Cart
        </Typography>
        <Box sx={{ px: { md: 16, xs: "0" } }}>
          <List sx={{ backgroundColor: "#112121", borderRadius: "20px" }}>
            {products.map((product) => (
              <ListItem key={product.id} sx={{ py: 2 }}>
                <ListItemAvatar>
                  <Avatar
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    variant="rounded"
                    sx={{ width: 96, height: 96 }}
                  />
                </ListItemAvatar>
                <Box sx={{ ml: 2, flex: 1 }}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ textDecoration: "none" }}
                        variant="h6"
                        component="a"
                        href={product.href}
                      >
                        {product.name}
                      </Typography>
                    }
                    secondary={product.color}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      mt: 1,
                    }}
                  >
                    <Box sx={{ display: "flex " }}>
                      <Typography variant="body2" color="textSecondary">
                        Qty
                      </Typography>
                      <Select sx={{ height: "30px" }} defaultValue={1}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                      </Select>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Typography variant="body1" sx={{ ml: 2 }}>
                    {product.price}
                  </Typography>
                  <Button color="primary" onClick={() => {}}>
                    Remove
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              px: 16,
              width: "70%",
              borderTop: "1px solid",
              borderColor: "divider",
              pt: 2,
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">$262.00</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
              Shipping and taxes calculated at checkout.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                component={Link}
                to="/checkout"
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#111917", color: "#12CD7E" }}
                href="#"
              >
                Checkout
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                mt: 2,
              }}
            >
              <Typography variant="body2" color="textSecondary">
                or{" "}
                <Button
                  color="primary"
                  component={Link}
                  to="/"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping →
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Bottom} // Replace with the actual image path
          alt="Below Product Grid"
          style={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Cart;
