import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  InputBase,
} from "@mui/material";
import usedata from "../data/useData.json"; // Adjust the path as needed
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

const UsePage = () => {
  const { category } = useParams();
  const tags = ["Art", "Food", "Other", "Studio"];
  const isTablet = useMediaQuery("(max-width:1113px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedCategory = usedata.find((cat) => cat.path === category);

  return (
    <Box
      sx={{
        padding: !isTablet ? "20px 140px 20px 140px" : "10px",
      }}
    >
      {selectedCategory && (
        <>
          <Typography variant="h4" sx={{ color: "#9cf5b8", marginBottom: 2 }}>
            {selectedCategory.text}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: "white", lineHeight: 2 }}
          >
            {selectedCategory.description}
          </Typography>
          {/* <Grid container sx={{ marginTop: "40px" }} spacing={2}>
            {selectedCategory.products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          gap: "20px",
          marginTop: "80px",
        }}
      >
        <Typography
          sx={{
            fontSize: "",
          }}
        >
          All Tags
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "14px",
          }}
        >
          {tags.map((tag, index) => {
            return (
              // <Button key={index} sx={{ fontSize: '12px', backgroundColor:"#9cf5b8", color:'black', margin: '0.5em' }}>
              <Typography
                key={index}
                variant="body1"
                sx={{
                  fontSize: "12px",
                  backgroundColor: "#9cf5b8",
                  color: "#2F4F4F",
                  paddingX: "8px",
                  paddingY: "5px",
                  // margin:'0.5em',
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                {tag}
              </Typography>
              //    </Button>
            );
          })}
        </Box>

        <Box
          sx={{
            width: "100%",
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
              width: "100%",
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

export default UsePage;
