import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Home1 from "../assets/Home/Poatry (3).png";
import communitycentric from "../assets/Home/Poatry (5).png";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
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
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Conscious <br /> Sustainable Efficient
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1.2em", md: "2em" },
              margin: "0px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Embrace the lifestyle you admire
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
          <img style={{ width: "100%" }} src={Home1} alt="bannerimage" />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: isMobile ? "90%" : "70%",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <Typography sx={{ color: "#9cf5b8", fontSize: "3em" }}>
          Localizing Conscious Living
        </Typography>
        <Typography variant="h6" sx={{ color: "white" }}>
          At Wibhoo, we prioritize making conscious living easy and accessible
          by emphasizing local solutions. This not only helps boost the local
          economy but also reduces negative environmental impacts.
        </Typography>
        <Button
          sx={{
            backgroundColor: "rgb(68, 222, 125)",
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "10px",
            padding: "8px 16px",
          }}
        >
          Know How
        </Button>
      </Box>
      <Box
        sx={{
          color: "#9cf5b8",
          fontSize: "3em",
          marginTop: "60px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Community-Centric Consciousness
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "fit-content",
          width: { md: "35%", xs: "100%" },
        }}
      >
        <img
          style={{ width: "100%" }}
          src={communitycentric}
          alt="communityCentricimage"
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/images/header.png"
          alt="Top Image"
          sx={{
            position: "absolute", // Absolute position for overlap
            width: isTablet ? "90%" : "58%",
            top: "0px",
            zIndex: 1, // Lower z-index to be in the background
          }}
        />

        <Box
          sx={{
            backgroundColor: "#9cf5b8",
            borderRadius: "20px",
            marginTop: isMobile ? "60px" : "90px",
            marginBottom: isMobile ? "60px" : "90px",
            width: isTablet ? "83%" : "55%",
            height: isMobile ? "1200px" : "550px",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                height: "250px",
                borderRadius: "20px",
                width: { sm: "45%", xs: "80%" },
                gap: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#111917",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-location-dot"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Being Hyperlocal
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Prioritizing local businesses and artisans to stimulate economic
                growth.
              </Box>
            </Box>
            <Box
              sx={{
                height: "250px",
                borderRadius: "20px",
                width: { sm: "45%", xs: "80%" },
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#111917",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-handshake"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Collaborative Engagement
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Cultivating a network of like-minded individuals to drive
                collective action for positive change.
              </Box>
            </Box>
            <Box
              sx={{
                height: "250px",
                borderRadius: "20px",
                width: { sm: "45%", xs: "80%" },
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#111917",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-seedling"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Environmental Impact
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Emphasizing sustainable practices to minimize ecological
                footprints.
              </Box>
            </Box>
            <Box
              sx={{
                height: "250px",
                borderRadius: "20px",
                width: { sm: "45%", xs: "80%" },
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#111917",
              }}
            >
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-infinity"></i>
              </Box>
              <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>
                Holistic Well-being
              </Box>
              <Box sx={{ color: "white", fontSize: "18px" }}>
                Fostering a culture of mindfulness, health, and social
                responsibility.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          component="img"
          src="/images/footer.png"
          alt="Top Image"
          sx={{
            position: "absolute", // Absolute position for overlap
            width: isTablet ? "90%" : "58%",

            bottom: "0px",
            zIndex: 1, // Lower z-index to be in the background
          }}
        />
      </Box>
      /////////////////////
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          justifyContent: "center",
          textAlign: "center",
          gap: "85px",
        }}
      >
        <Box sx={{ fontSize: "2em", color: "#9cf5b8" }}>
          Upcoming Sustainable Events and Workshops
        </Box>
        <Box sx={{ color: "#6f6f6f", fontSize: "18px" }}>
          No results found, try adjusting your search and filters.
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ color: "#9cf5b8", fontSize: "2em" }}>
          Potential Impact in a year to reach
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/721309a4-01ee-48b2-9ca2-fef0f76cecdc.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>3000+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Conscious Lifestyle Options to Choose from
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/b8ea3370-dc9a-44d6-bbf5-9d751b93820c.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>300+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Number of Partnerships with Organisations, businesses, and other
              stakeholders
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/964e2f97-b5cf-4b3a-8033-1b9e264d3dab.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>1000+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Tree Plantations for being Carbon Neutral
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "23%", sm: "48%", xs: "100%" },
              gap: "10px",
            }}
          >
            <Box>
              <img
                alt="first image"
                style={{ width: "100%", height: "200px" }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/ebea225c-9ec1-404a-8ebc-95b71cea9fab.svg"
              />
            </Box>
            <Box sx={{ color: "#9cf5b8", fontSize: "20px" }}>12,000+</Box>
            <Box sx={{ color: "white", fontSize: "18px" }}>
              Kg of Plastic Waste Prevented from Polluting our Environment
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
//
