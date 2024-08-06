import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/App/store";
import {
  fetchAsyncProductsOfCategory,
  getAllProductsByCategory,
  getCategoryProductsStatus,
} from "../Redux/feature/CategorySlice";
import SearchIcon from "@mui/icons-material/Search";
import Bottom from "/images/Top.png";
import Top from "/images/bottom.png";

const ProductPage = () => {
  const id = useParams();
  const { category } = useParams();
  console.log(id);
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) =>
    getAllProductsByCategory(state)
  );
  const productsStatus = useSelector((state: RootState) =>
    getCategoryProductsStatus(state)
  );
  const tags = ["Art", "Food", "Other", "Studio"];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      dispatch(fetchAsyncProductsOfCategory(category));
    }
  }, [category, dispatch]);

  const addToCart = (product: any) => {
    console.log("Product details:", product);
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "100px",
      }}
    >
      {productsStatus === "loading" && <p>Loading...</p>}
      {productsStatus === "succeeded" && (
        <>
          <Box sx={{ padding: "40px" }}>
            <Typography variant="h4" sx={{ color: "#12CD7E", marginBottom: 2 }}>
              {category}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 2, color: "#112121", lineHeight: 2 }}
            >
              Discover our range of {category} products.
            </Typography>
          </Box>

          {/* Image above the product grid */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={Top} alt="Above Product Grid" style={{ width: "100%" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#12CD7E",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid
              container
              sx={{
                marginTop: "40px",
                marginBottom: "40px",
                width: "100%",
              }}
              spacing={4}
            >
              {products.map((product) => (
                <Grid
                  item
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  xs={12}
                  sm={6}
                  md={3}
                  key={product.id}
                >
                  <Link to={`/products/${product?.id}`}>
                    <Card
                      sx={{
                        width: "300px",
                        height: "450px",
                        padding: "0px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: "300px",
                          height: "250px",
                          objectFit: "cover",
                        }}
                        image={product.images[0]}
                        alt={product.title}
                      />
                      <CardContent sx={{ padding: "8px", flexGrow: 1 }}>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.brand}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                          ${product.price.toFixed(2)}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "8px",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Image below the product grid */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={Bottom}
              alt="Below Product Grid"
              style={{ width: "100%" }}
            />
          </Box>
        </>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#112121",
          gap: "20px",
          marginTop: "80px",
        }}
      >
        <Typography>All Tags</Typography>
        <Box sx={{ display: "flex", gap: "14px" }}>
          {tags.map((tag, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: "12px",
                backgroundColor: "#12CD7E",
                color: "#2F4F4F",
                paddingX: "8px",
                paddingY: "5px",
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            width: "80%",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <IconButton sx={{ p: "0" }} aria-label="search">
            <SearchIcon sx={{ fontSize: { xs: "22px", md: "32px" } }} />
          </IconButton>
          <InputBase
            placeholder="Type here to Search"
            sx={{
              width: "70%",
              height: { xs: "28px", md: "40px" },
              color: "black",
              paddingLeft: "10px",
              fontSize: { xs: "14px", md: "16px" },
              borderRadius: "10px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
