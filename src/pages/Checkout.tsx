import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bottom from "/images/Top.png";
import Top from "/images/bottom.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

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

interface Address {
  name: string;
  street: string;
  city: string;
  pinCode: number;
  state: string;
  phone: number;
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

const addresses: Address[] = [
  {
    name: "John Wick",
    street: "11th Main",
    city: "Delhi",
    pinCode: 110001,
    state: "Delhi",
    phone: 12312321331,
  },
  {
    name: "John Doe",
    street: "15th Main",
    city: "Bangalore",
    pinCode: 560034,
    state: "Karnataka",
    phone: 123123123,
  },
];

const Checkout: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress(event.target.value);
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

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
        <Grid container sx={{ px: { md: 10, xs: 0 } }} spacing={4}>
          <Grid item xs={12} md={5}>
            <Box
              mt={3}
              bgcolor="#112121"
              sx={{ px: { md: 6, xs: 0 }, borderRadius: "20px" }}
            >
              <Box borderBottom={1} borderColor="grey.200" p={2}>
                <Typography variant="h4" gutterBottom>
                  Cart
                </Typography>
              </Box>
              <Box p={2}>
                <Grid container spacing={2}>
                  {products.map((product) => (
                    <Grid item xs={12} key={product.id} display="flex">
                      <CardMedia
                        component="img"
                        image={product.imageSrc}
                        alt={product.imageAlt}
                        sx={{ width: 96, height: 96 }}
                      />
                      <Box
                        ml={2}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        <Typography variant="body1">
                          <Link
                            style={{ textDecoration: "none" }}
                            to={product.href}
                          >
                            {product.name}
                          </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {product.color}
                        </Typography>
                        <Box
                          display="flex"
                          marginTop="10px"
                          justifyContent="space-between"
                        >
                          <FormControl size="small">
                            <InputLabel id="quantity-label">Qty</InputLabel>
                            <Select
                              sx={{ height: "30px" }}
                              labelId="quantity-label"
                              id="quantity"
                              defaultValue={product.quantity}
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body1">
                            {product.price}
                          </Typography>
                          <Button color="secondary">Remove</Button>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box borderTop={1} borderColor="grey.200" p={2}>
                <Typography
                  variant="body1"
                  display="flex"
                  justifyContent="space-between"
                >
                  Subtotal
                  <span>$262.00</span>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Shipping and taxes calculated at checkout.
                </Typography>
                <Box mt={2}>
                  <Button
                    component={Link}
                    to="/payment"
                    sx={{ backgroundColor: "#111917", color: "#12CD7E" }}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Proceed to Checkout
                  </Button>
                  <Box mt={2}>
                    <Button
                      component={Link}
                      to="/shop"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    >
                      Continue Shopping
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              p={3}
              mt={3}
              sx={{ px: { md: 6, xs: 4 }, borderRadius: "20px" }}
              bgcolor="#112121"
            >
              <Typography variant="h5" gutterBottom>
                Personal Information
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Use a permanent address where you can receive mail.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="first-name"
                    name="first-name"
                    label="First name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="last-name"
                    name="last-name"
                    label="Last name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email address"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      labelId="country-label"
                      id="country"
                      defaultValue=""
                    >
                      <MenuItem value="United States">United States</MenuItem>
                      <MenuItem value="Canada">Canada</MenuItem>
                      <MenuItem value="Mexico">Mexico</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="street-address"
                    name="street-address"
                    label="Street address"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="region"
                    name="region"
                    label="State / Province"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="postal-code"
                    name="postal-code"
                    label="ZIP / Postal code"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box mt={3} display="flex" justifyContent="space-between">
                <Button variant="outlined">Reset</Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#111917", color: "#12CD7E" }}
                >
                  Add Address
                </Button>
              </Box>

              <Typography variant="h6" gutterBottom mt={4}>
                Addresses
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Choose from Existing addresses
              </Typography>
              <RadioGroup
                aria-label="address"
                name="address"
                value={selectedAddress}
                onChange={handleAddressChange}
              >
                {addresses.map((address) => (
                  <Box
                    key={address.phone}
                    p={2}
                    border={1}
                    borderColor="grey.300"
                    borderRadius={2}
                    mb={2}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Box display="flex" alignItems="center">
                      <FormControlLabel
                        value={address.name}
                        control={<Radio />}
                        label={
                          <Box>
                            <Typography variant="body1" fontWeight="bold">
                              {address.name}
                            </Typography>
                            <Typography variant="body2">
                              {address.street}
                            </Typography>
                            <Typography variant="body2">
                              {address.pinCode}
                            </Typography>
                          </Box>
                        }
                      />
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                    >
                      <Typography variant="body2">
                        Phone: {address.phone}
                      </Typography>
                      <Typography variant="body2">{address.city}</Typography>
                    </Box>
                  </Box>
                ))}
              </RadioGroup>

              <Box mt={4}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Payment Methods</FormLabel>
                  <RadioGroup
                    aria-label="payment"
                    name="payment"
                    value={paymentMethod}
                    onChange={handlePaymentChange}
                  >
                    <FormControlLabel
                      value="cash"
                      control={<Radio />}
                      label="Cash"
                    />
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label="Card Payment"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Grid>
        </Grid>
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

export default Checkout;
