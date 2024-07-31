import {
  Box,
  Button,
  IconButton,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Postercrousel1 from "../assets/Places/1.png";
import Postercrousel2 from "../assets/Places/2.png";
import Postercrousel3 from "../assets/Places/3.png";
import Postercrousel4 from "../assets/Places/4.png";
import Poatry1 from "../assets/Places/shine (2)m.png";
import Top1 from "/images/Top1.png";
import Bottom1 from "/images/Bottom1.png";

const Places = () => {
  const [currentPoster, setCurrentPoster] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((currentPoster: any) => {
        if (currentPoster === 3) return 0;
        return currentPoster + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  });

  const categories = ["Art", "Food", "Other", "Studio"];

  const poster = [
    {
      id: 1,
      title: "Vibrant Cultural Hubs",
      image: `${Postercrousel1}`,
      description:
        "Explore diverse cultural hotspots and vibrant neighborhoods, each with its own unique charm and character",
    },
    {
      id: 2,
      title: "Artistic Venues",
      image: `${Postercrousel2}`,
      description:
        "Immerse yourself in creativity at curated art galleries, studios, and performance spaces, showcasing local talent and innovative expressions.",
    },
    {
      id: 3,
      title: "Community Gathering Spaces",
      image: `${Postercrousel3}`,
      description:
        "Discover communal spaces and event venues designed to bring people together, fostering connections and collaboration.",
    },
    {
      id: 4,
      title: "Natural Retreats",
      image: `${Postercrousel4}`,
      description:
        "Escape to tranquil parks, scenic gardens, and serene landscapes, offering moments of relaxation and rejuvenation amidst natures beauty.",
    },
  ];

  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        gap: { xs: "30px", md: "50px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "none",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/images/PaintBrush.png)",
            backgroundSize: isMobile ? "cover" : "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "10px",
            width: isMobile ? "390px" : "700px", // Ensure the box has a width
            height: isMobile ? "280px" : "480px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center horizontally
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              color: "#111917",
              fontSize: { md: "3.5em", xs: "1.8em" },
              margin: "0px",
              maxWidth: { md: "70%", xs: "95%" },
              marginTop: { md: "-30px", xs: "0px" },
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Discover Inspiring & Creative Places
          </Box>
          <Typography
            sx={{
              color: "#FF5757",
              fontSize: { xs: "1.2em", md: "2em" },
              margin: "0px",
              maxWidth: { md: "70%", xs: "85%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Explore sustainable destinations and artistic venues that inspire
            creativity and foster community
          </Typography>
          <Button
            sx={{
              backgroundColor: "rgb(68, 222, 125)",
              textDecoration: "none",
              color: "black",
              fontSize: isMobile ? "15px" : "20px",
              fontWeight: "600",
              borderRadius: "10px",
              padding: "8px 16px",
            }}
          >
            Explore Now
          </Button>
        </Box>
        <Box sx={{ display: "flex", width: isMobile ? "80%" : "35%" }}>
          <img style={{ width: "100%" }} src={Poatry1} alt="bannerimage" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2em",
            color: "#9cf5b8",
            textAlign: "center",
          }}
        >
          Explore the Places
        </Typography>

        <Typography
          sx={{
            fontSize: "",
          }}
        >
          ALL CATEGORIES
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "14px",
          }}
        >
          {categories.map((category, index) => {
            return (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  fontSize: "12px",
                  backgroundColor: "#9cf5b8",
                  color: "#2F4F4F",
                  paddingX: "8px",
                  paddingY: "5px",
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                {category}
              </Typography>
            );
          })}
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
              width: "100%",
              height: { xs: "28px", md: "40px" },
              color: "black",
              paddingLeft: "10px",
              fontSize: { xs: "22px", md: "26px" },
              borderRadius: "10px",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Box>
      <Box sx={{ marginX: "auto", textAlign: "center" }}>
        <Box sx={{ marginY: { xs: "0px", md: "30px" }, color: "gray" }}>
          <Typography sx={{ fontSize: { sm: "18", md: "22px" } }}>
            No results found, try adjusting your search and filters.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Top1} // Replace with the actual image path
            alt="Below Product Grid"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            gap: "20px",
            backgroundColor: "#FF5757",
          }}
        >
          <Typography
            sx={{
              fontSize: "2em",
              color: "#111917",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            You will Find here
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: { md: "space-around" },
              alignItems: { xs: "center" },
              gap: { xs: "20px" },
              marginBottom: "30px",
              maxWidth: "1200px",
            }}
          >
            <Box sx={{ width: { xs: "90%", md: "45%" } }}>
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={`${poster[currentPoster].image}`}
              ></img>
            </Box>
            <Box sx={{ width: { xs: "90%", md: "35%" } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  gap: "5px",
                  paddingX: "8px",
                  paddingY: "8px",
                  borderRadius: "15px",
                  backgroundColor: `${currentPoster === 0 ? "#1C523A" : ""}`,
                }}
              >
                <Typography variant="h5">{poster[0].title}</Typography>
                {currentPoster === 0 && (
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    {poster[0].description}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  gap: "5px",
                  paddingX: "8px",
                  paddingY: "8px",
                  borderRadius: "15px",
                  backgroundColor: `${currentPoster === 1 ? "#1C523A" : ""}`,
                }}
              >
                <Typography variant="h5">{poster[1].title}</Typography>
                {currentPoster === 1 && (
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    {poster[1].description}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  gap: "5px",
                  paddingX: "8px",
                  paddingY: "8px",
                  borderRadius: "15px",
                  backgroundColor: `${currentPoster === 2 ? "#1C523A" : ""}`,
                }}
              >
                <Typography variant="h5">{poster[2].title}</Typography>
                {currentPoster === 2 && (
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    {poster[2].description}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  gap: "5px",
                  paddingX: "8px",
                  paddingY: "8px",
                  borderRadius: "15px",
                  backgroundColor: `${currentPoster === 3 ? "#1C523A" : ""}`,
                }}
              >
                <Typography variant="h5">{poster[3].title}</Typography>
                {currentPoster === 3 && (
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    {poster[3].description}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
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
    </Box>
  );
};

export default Places;
