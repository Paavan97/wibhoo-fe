import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "../../assets/FooterProducts/pm hero.png";
import { Typewriter } from "react-simple-typewriter";
import ProductCategories from "../../views/ProductsFooter/ProductCategories";
import Top1 from "/images/Top1.png";
import Bottom1 from "/images/Bottom1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faShoppingBag,
  faMapMarkerAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const words = ["Eco-Friendly", "Organic", "Upcycled"];
  const features = [
    {
      icon: faLeaf,
      value: "Green & Safe",
      description: "Checked Consciously",
    },
    {
      icon: faShoppingBag,
      value: "One stop Shop",
      description: "Everything you need",
    },
    {
      icon: faMapMarkerAlt,
      value: "Being Local",
      description: "Empowering people near you",
    },
    {
      icon: faStar,
      value: "Premium Quality",
      description: "Superior in looking and feeling",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          height: { md: "70vh", sm: "900px", xs: "1000px" },
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              'url("/images/RedSplashTop.png"),url("/images/GreenSplashBottom.png")',
            backgroundRepeat: "no-repeat,no-repeat",
            backgroundPosition: "top right, bottom left",
            opacity: 0.7,
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              flexDirection: { md: "row", xs: "column-reverse" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "25px",

                width: { md: "50%", xs: "100%" },
              }}
            >
              <img
                style={{ width: "500px", borderRadius: "20px" }}
                src={Image}
                alt="bannerimage"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { md: "50%", xs: "100%" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { md: "start", xs: "center" },
                height: "auto",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  color: "#9cf5b8",
                  fontSize: { md: "3em", xs: "4em" },
                  margin: "0px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Discover Treasures
              </Box>
              <Box
                sx={{
                  color: "#fff",
                  fontSize: { md: "3em", xs: "4em" },
                  margin: "0px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typewriter
                  words={words}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "1.5em", md: "1.2em" },
                  margin: "0px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Discover conscious services that enhance your own well-being and
                support the planet too
              </Typography>
              <Button
                sx={{
                  backgroundColor: "rgb(68, 222, 125)",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  padding: "8px 16px",
                }}
              >
                Shop Them
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            color: "#9cf5b8",
            width: "100%",
            fontSize: "3em",
            margin: "0px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Select the Category
        </Box>
        <ProductCategories />
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Top1} // Replace with the actual image path
          alt="Above Product Grid"
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#FF5757",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            color: "#111917",
            fontSize: "3em",
            marginTop: "20px",
          }}
        >
          Why Buy From Us
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#FF5757",
            marginTop: "30px",
            // gap: "1px",
          }}
        >
          {features.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Box>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ fontSize: "4em", color: "#9cf5b8" }}
                />
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                {item.value}
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                {item.description}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Bottom1} // Replace with the actual image path
          alt="Below Product Grid"
          style={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Products;
