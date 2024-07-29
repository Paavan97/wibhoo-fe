import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

interface CardProps {
  checked?: boolean;
  image: string;
}

interface DescriptionProps {
  checked?: boolean;
}

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Container = styled(Box)(({ theme }) => ({
  height: "400px",
  display: "flex",
  flexDirection: "column", // Default to vertical layout
  justifyContent: "start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row", // Change to horizontal layout on mobile and tablet
    overflowX: "auto", // Allow horizontal scrolling on mobile and tablet
    height: "auto",
  },
}));

const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked" && prop !== "image",
})<CardProps>(({ checked, image }) => ({
  width: checked ? "600px" : "80px",
  height: "600px",
  borderRadius: ".75rem",
  backgroundSize: "cover",
  cursor: "pointer",
  overflow: "hidden",
  margin: "0 10px",
  display: "flex",
  alignItems: "flex-end",
  transition: ".6s cubic-bezier(.28,-0.03,0,.99)",
  boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.8)",
  backgroundImage: `url(${image})`,
}));

const Row = styled(Box)(({ theme }) => ({
  color: "white",
  display: "flex",
  flexDirection: "row", // Default to vertical layout
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row", // Change to horizontal layout on mobile and tablet
  },
}));

const Icon = styled(Box)({
  background: "#223",
  color: "white",
  borderRadius: "50%",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "15px",
});

const Description = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
})<DescriptionProps>(({ checked }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",
  height: "150px",
  width: "520px",
  opacity: checked ? 1 : 0,
  transform: checked ? "translateY(0)" : "translateY(30px)",
  transitionDelay: ".3s",
  transition: "all .3s ease",
}));

const descriptions = [
  {
    id: "c1",
    icon: "1",
    title: "Planet-Friendly Products",
    text: "Discover products that prioritize sustainability and reduce environmental impact.",
    image: "https://pixlr.com/images/index/product-image-one.webp",
  },
  {
    id: "c2",
    icon: "2",
    title: "Practical Services",
    text: "Access sustainable services designed to simplify your eco-friendly routines.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYuijaNPmw2QV-Lp96jlXbZMGbkySuZ_5XA&s",
  },
  {
    id: "c3",
    icon: "3",
    title: "Places & Spaces",
    text: "Discover products that prioritize sustainability and reduce environmental impact.",
    image: "https://fps.cdnpk.net/home/cover/image-14-sm.webp?w=438&h=438",
  },
  {
    id: "c4",
    icon: "4",
    title: "Collaborative Communities",
    text: "Join vibrant communities and Events dedicated to conscious living.",
    image: "https://pixlr.com/images/index/product-image-two.webp",
  },
];

const Carousel = () => {
  const [selected, setSelected] = React.useState("c1");

  return (
    <Wrapper>
      <Container>
        <RadioGroup
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          row
        >
          {descriptions.map((desc) => (
            <FormControlLabel
              key={desc.id}
              value={desc.id}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Card image={desc.image} checked={selected === desc.id}>
                  <Row>
                    <Icon
                      sx={{
                        width: "70px",
                        height: "70px",
                        margin: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {desc.icon}
                    </Icon>
                    <Description checked={selected === desc.id}>
                      <Typography
                        variant="h4"
                        sx={{ textTransform: "uppercase" }}
                      >
                        {desc.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#b0b0ba", paddingTop: "5px" }}
                      >
                        {desc.text}
                      </Typography>
                    </Description>
                  </Row>
                </Card>
              }
            />
          ))}
        </RadioGroup>
      </Container>
    </Wrapper>
  );
};

export default Carousel;
