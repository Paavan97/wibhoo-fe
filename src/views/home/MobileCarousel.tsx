import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import one from "../../assets/Home/carosuel1.png";
import two from "../../assets/Home/carosuel2.png";
import three from "../../assets/Home/carosuel3.png";
import four from "../../assets/Home/carosuel4.png";

interface CardProps {
  checked?: boolean;
  image: string;
  bgColor: string;
}

interface DescriptionProps {
  checked?: boolean;
}

interface TitleProps {
  checked?: boolean;
}

const Wrapper = styled("div")({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Container = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  marginTop: "50px",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column", // Stack cards vertically
  justifyContent: "center",
  alignItems: "center",
}));

const Card = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "checked" && prop !== "image" && prop !== "bgColor",
})<CardProps>(({ checked, image, bgColor }) => ({
  width: "100%", // Full width for each card
  height: checked ? "600px" : "50px", // Adjust height based on selection
  borderRadius: ".75rem",
  padding: "10px",
  backgroundSize: "345px 650px",
  backgroundRepeat: "no-repeat",
  cursor: "pointer",
  overflow: "hidden",
  margin: "15px 0", // Margin for vertical spacing
  display: "flex",
  alignItems: "flex-end",
  transition: ".6s cubic-bezier(.28,-0.03,0,.99)",
  boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.8)",
  backgroundImage: checked ? `url(${image})` : "none",
  backgroundColor: checked ? "transparent" : bgColor,
  position: "relative",
  zIndex: 1, // Bring selected card to front
}));

const Description = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
})<DescriptionProps>(({ checked }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  opacity: checked ? 1 : 0,
  transform: checked ? "translateY(0)" : "translateY(30px)",
  transition: "all .3s ease",
}));

const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "checked",
})<TitleProps>(({ checked }) => ({
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: checked ? "translate(-50%, 0)" : "translate(-50%, 0)",
  color: checked ? "transparent" : "#111917",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center", // Center align title
  width: "100%",
  whiteSpace: "nowrap", // Prevent text from wrapping
}));

const descriptions = [
  {
    id: "c1",
    icon: "1",
    title: "Planet- Friendly Products",
    text: "Discover products that prioritize sustainability and reduce environmental impact.",
    image: one,
    bgColor: "rgb(68, 222, 125)",
    bName: "Shop Products",
  },
  {
    id: "c2",
    icon: "2",
    title: "Practical Services",
    text: "Access sustainable services designed to simplify your eco-friendly routines.",
    image: two,
    bgColor: "#FF6364",
    bName: "Explore Services",
  },
  {
    id: "c3",
    icon: "3",
    title: "Places & Spaces",
    text: "Find sustainable destinations where you can connect & rejuvenate.",
    image: three,
    bgColor: "#12CD7E ",
    bName: "Discover Places",
  },
  {
    id: "c4",
    icon: "4",
    title: "Collaborative Communities",
    text: "Join vibrant communities and Events dedicated to conscious living.",
    image: four,
    bgColor: "#fff",
    bName: "Connect With Like-Minds",
  },
];

const MobileCarousel = () => {
  const [selected, setSelected] = React.useState("c1");

  return (
    <Wrapper>
      <Container>
        <RadioGroup
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          aria-label="Carousel"
        >
          {descriptions.map((desc, index) => (
            <FormControlLabel
              key={desc.id}
              value={desc.id}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Card
                  image={desc.image}
                  checked={selected === desc.id}
                  bgColor={desc.bgColor}
                  style={{
                    marginTop: index !== 0 ? "-27px" : "0", // Overlap cards slightly
                  }}
                >
                  <Title checked={selected === desc.id} fontSize="19px">
                    {desc.title}
                  </Title>

                  <Description
                    sx={{
                      backgroundColor: "#111917",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                    checked={selected === desc.id}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "#12CD7E",
                      }}
                    >
                      {desc.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        paddingTop: "5px",
                        textAlign: "center",
                        color: "#112121",
                      }}
                    >
                      {desc.text}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "10px",
                        alignSelf: "center",
                        backgroundColor: "rgb(68, 222, 125)",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "#112121",
                        },
                      }}
                    >
                      {desc.bName}
                    </Button>
                  </Description>
                </Card>
              }
            />
          ))}
        </RadioGroup>
      </Container>
    </Wrapper>
  );
};

export default MobileCarousel;
