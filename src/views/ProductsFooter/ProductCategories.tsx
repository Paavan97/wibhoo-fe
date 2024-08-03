import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const categories = [
  {
    title: "Home & Living",
    path: "/category/home-living",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/cc3a8a05-aa7a-4b88-b0c0-ff9a445dded3.jpeg",
  },
  {
    title: "Fashion & Clothing",
    path: "/category/fashion-clothing",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/105b2caa-92db-4215-82ee-f4b03d1165dc.jpeg",
  },
  {
    title: "Food & Eating",
    path: "/category/eat-drink",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/21f54bbc-2930-4b21-a2e1-057cb04d6350.jpeg",
  },
  {
    title: "Beauty & Care",
    path: "/category/beauty-care",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/b00d6d9e-7e46-444f-9329-945af544930a.jpeg",
  },
  {
    title: "Life Essentials",
    path: "/category/lifestyle-essentials",
    image:
      "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/37e9af6a-4ec3-4b9d-8383-33717f8a7678.jpeg",
  },
];

const ProductCategories = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-around">
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            width: 400,
            height: 600,
            margin: 2,
            position: "relative",
            backgroundImage: 'url("/images/card2.png")', // replace with your static image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              background: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="290"
              sx={{ width: "80%", marginTop: 10 }}
              image={category.image}
              alt={category.title}
            />

            <CardContent
              sx={{
                textAlign: "center",
                width: "100%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                color="#111917"
                sx={{ marginBottom: 2, marginTop: "100%" }}
              >
                {category.title}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#111917",
                  color: "#9cf5b8",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#111917",
                  },
                }}
                href={category.path} // Optional: Add link to the button
              >
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ProductCategories;
