import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "../../assets/FooterServices/hs.png";
import Top1 from "../../../public/images/Top1.png";
import Bottom1 from "../../../public/images/Bottom1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DoneIcon from "@mui/icons-material/Done";
import {
  faHandHoldingHeart,
  faHandsAslInterpreting,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCategories from "../../views/ProductsFooter/SeviceCategories";
import Bottom from "../../../public/images/Top.png";
import Platform from "../../assets/FooterServices/shine .png";
import Top from "../../../public/images/bottom.png";

const Service = () => {
  const features = [
    {
      icon: faHandHoldingHeart,
      value: "Ethical Practices",
      description:
        "Connect with providers committed to ethical standards and social responsibility.",
    },
    {
      icon: faHandsAslInterpreting,
      value: "Holistic Offerings",
      description:
        "Find services catering to your physical, mental, and emotional health needs.",
    },
    {
      icon: faFingerprint,
      value: "Personalized Support",
      description:
        "Receive tailored services from experts, supporting your conscious journey.",
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
              'url("../../../public/Cards/RedSplashTop.png"),url("../../../public/Cards/GreenSplashBottom.png")',
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
                Elevate Your Lifestyle with Sustainable Services
              </Box>

              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "1.5em", md: "1.2em" },
                  margin: "0px",
                  width: "70%",
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
                Explore Services
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
        <ServiceCategories />
      </Box>
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "auto",
          alignItems: "center",
          backgroundColor: "#9cf5b8",
          gap: "50px",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            height: "fit-content",
            width: { md: "35%", xs: "100%" },
          }}
        >
          <img
            style={{ width: "90%", borderRadius: "20px" }}
            src={Platform}
            alt="communityCentricimage"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { md: "45%", xs: "100%" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { md: "start", xs: "center" },
            height: "auto",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "20px",
              gap: "50px",
              flexDirection: { md: "row", xs: "column-reverse" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginTop: "100px",
                width: { md: "100%", xs: "100%" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { md: "start", xs: "center" },
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  color: "#111917",
                  fontSize: { md: "3em", xs: "3em" },
                  margin: "0px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Next generation Service Platform
              </Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "1.5em", md: "1.2em" },
                  margin: "0px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                At Wibhoo, our service marketplace is your gateway to a
                sustainable lifestyle. We offer eco-friendly services that
                promote well-being while minimizing our environmental impact.
                From holistic health practices to ethical living services, we
                empower individuals to make conscious choices for a healthier
                planet and a happier community.
                <br />
                <br />
                <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
                Community-Centric
                <br />
                <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
                Curated Variety
                <br />
                <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
                Seamless Experience
                <br />
                <DoneIcon sx={{ color: "rgb(68, 222, 125)" }} />
                Impactful Connections
                <br />
              </Typography>
              <br />
              <br />

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
                Read More
              </Button>
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
          src={Bottom} // Replace with the actual image path
          alt="Below Product Grid"
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "200px",
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
          What is Different
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
              <Box
                sx={{ color: "#9cf5b8", fontSize: { md: "25px", sm: "20px" } }}
              >
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

export default Service;
