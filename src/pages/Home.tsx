import {
  Box,
  Button,
  Grid,
  Input,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Home1 from "../assets/Home/Poatry (3).png";
import communitycentric from "../assets/Home/Poatry (5).png";
import Carousel from "../views/home/Carousel";
import MobileCarousel from "../views/home/MobileCarousel";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const isCarousel = useMediaQuery("(max-width:1000px)");

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
          height: "100vh",
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
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Conscious <br /> Sustainable Efficient
          </Box>
          <Typography
            sx={{
              color: "#FF5757",
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
          marginTop: "100px",
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
          Explore the ways
        </Typography>
        <Typography variant="h6" sx={{ color: "white" }}>
          Explore Planet-Friendly Choices, Practical Services, Beautiful
          Getaways, and Collaborative Networks
        </Typography>
      </Box>
      {isCarousel ? <MobileCarousel /> : <Carousel />}

      <Box
        sx={{
          color: "#9cf5b8",
          fontSize: "3em",
          padding: "10px",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        Community-Centric Consciousness
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "fit-content",
          width: { md: "35%", xs: "90%" },
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          padding: "20px",
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
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ color: "#9cf5b8", fontSize: "2em" }}>
          Potential Impact in a year to reach
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            padding: "20px",
            // gap: "1px",
          }}
        >
          {[
            {
              imgSrc:
                "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/721309a4-01ee-48b2-9ca2-fef0f76cecdc.svg",
              value: "3000+",
              description: "Conscious Lifestyle Options to Choose from",
            },
            {
              imgSrc:
                "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/b8ea3370-dc9a-44d6-bbf5-9d751b93820c.svg",
              value: "300+",
              description:
                "Number of Partnerships with Organisations, businesses, and other stakeholders",
            },
            {
              imgSrc:
                "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/964e2f97-b5cf-4b3a-8033-1b9e264d3dab.svg",
              value: "1000+",
              description: "Tree Plantations for being Carbon Neutral",
            },
            {
              imgSrc:
                "https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/ebea225c-9ec1-404a-8ebc-95b71cea9fab.svg",
              value: "12,000+",
              description:
                "Kg of Plastic Waste Prevented from Polluting our Environment",
            },
          ].map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box>
                <img
                  alt="impact"
                  style={{ width: "100%", height: "200px" }}
                  src={item.imgSrc}
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
          marginTop: "40px",
          // backgroundColor: "black",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            color: "#9cf5b8",
            fontSize: "2.5em",
            marginTop: "60px",
          }}
        >
          Join the Tribe - It's Free!
        </Box>
        <Box sx={{ color: "white", fontSize: "18px" }}>
          Sign up for budget-friendly offers, trendy arrivals, fabulous events,
          and outstanding workshops.
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "80px",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            sx={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              width: { xs: "80%", md: "500px" },
              border: "1px solid #9cf5b8",
              outline: "none",
              backgroundColor: "white",
            }}
          />
          <Button
            sx={{
              backgroundColor: "rgb(68, 222, 125)",
              color: "black",
              width: { xs: "80%", sm: "100px", md: "auto" },
              minWidth: { xs: "100px", md: "auto" },
              padding: "10px",
            }}
          >
            Join now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
//
