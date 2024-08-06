import React, { useEffect, useState } from "react";
import Bottom from "/images/Top.png";
import Top from "/images/bottom.png";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../Redux/App/hooks";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../../Redux/feature/ProductSlice";
import { useParams } from "react-router-dom";

interface Product {
  name: string;
  price: string;
  href: string;
  breadcrumbs: { id: number; name: string; href: string }[];
  images: { src: string; alt: string }[];
  colors: { name: string; class: string; selectedClass: string }[];
  sizes: { name: string; inStock: boolean }[];
  description: string;
  highlights: string[];
  details: string;
}

// const product: Product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     { name: "#112121", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
//     { name: "XXS", inStock: false },
//     { name: "XS", inStock: true },
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//     { name: "2XL", inStock: true },
//     { name: "3XL", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const { id } = useParams();
  console.log("Product ID from params:", id);

  const dispatch = useAppDispatch();
  const product = useAppSelector(getProductSingle);
  // console.log(product?.images);
  const productStatus = useAppSelector(getSingleProductStatus);
  const [selectedColor, setSelectedColor] = useState<
    Product["colors"][0] | null
  >(null);
  const [selectedSize, setSelectedSize] = useState<Product["sizes"][0] | null>(
    null
  );
  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      if (!isNaN(productId)) {
        dispatch(fetchAsyncProductSingle(productId));
      }
    }
  }, [dispatch, id]);

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
      <Container
        sx={{
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "cneter",
          backgroundColor: "#12CD7E",
        }}
      >
        <Box
          mt={6}
          mb={6}
          px={{ md: 10, xs: 5 }}
          bgcolor="#E2F4DD"
          borderRadius="20px"
          width="70%"
        >
          {product && (
            <>
              {/* <Breadcrumbs aria-label="breadcrumb">
              {product.breadcrumbs.map((breadcrumb) => (
                <Link
                  key={breadcrumb.id}
                  href={breadcrumb.href}
                  underline="hover"
                  color="inherit"
                >
                  {breadcrumb.name}
                </Link>
              ))}
              <Typography color="text.primary">{product.name}</Typography>
            </Breadcrumbs> */}

              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    component="img"
                    src={product?.images?.[0]}
                    alt={product?.images?.[0]}
                    width="100%"
                    borderRadius="borderRadius"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    component="img"
                    src={product?.images?.[1]}
                    alt={product?.images?.[1]}
                    width="100%"
                    borderRadius="borderRadius"
                    mb={2}
                  />
                  {/* <Box
                    component="img"
                    src={product?.images?.[2]}
                    alt={product?.images?.[2]}
                    width="100%"
                    borderRadius="borderRadius"
                  /> */}
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box
                    component="img"
                    src={product?.images?.[2]}
                    alt={product?.images?.[2]}
                    width="100%"
                    borderRadius="borderRadius"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={4}>
                <Grid item xs={12} md={8} mb={8}>
                  <Typography variant="h4" component="h1">
                    {product?.title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {product?.price}
                  </Typography>

                  <Box display="flex" alignItems="center" mt={2}>
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        color={
                          reviews.average > rating ? "primary" : "disabled"
                        }
                      />
                    ))}
                    <Link href={reviews.href} ml={2}>
                      {reviews.totalCount} reviews
                    </Link>
                  </Box>

                  {/* <Box mt={4}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Color</FormLabel>
                      <RadioGroup
                        row
                        value={selectedColor?.name || ""}
                        onChange={(e) =>
                          setSelectedColor(
                            product.colors.find(
                              (color) => color.name === e.target.value
                            )!
                          )
                        }
                      >
                        {product.colors.map((color) => (
                          <FormControlLabel
                            key={color.name}
                            value={color.name}
                            control={<Radio />}
                            label={color.name}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box> */}

                  {/* <Box mt={4}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Size</FormLabel>
                      <RadioGroup
                        row
                        value={selectedSize?.name || ""}
                        onChange={(e) =>
                          setSelectedSize(
                            product.sizes.find(
                              (size) => size.name === e.target.value
                            )!
                          )
                        }
                      >
                        {product.sizes.map((size) => (
                          <FormControlLabel
                            key={size.name}
                            value={size.name}
                            control={<Radio />}
                            label={size.name}
                            disabled={!size.inStock}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box> */}

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 4 }}
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  {/* <Typography variant="body1">{product.description}</Typography>

                  <Typography variant="h6" mt={4}>
                    Highlights
                  </Typography> */}
                  {/* <ul>
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Typography variant="body2">{highlight}</Typography>
                      </li>
                    ))}
                  </ul> */}

                  <Typography variant="h6" mt={4}>
                    Details
                  </Typography>
                  <Typography variant="body2">
                    {product?.description}
                  </Typography>
                </Grid>
              </Grid>
            </>
          )}
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
}
