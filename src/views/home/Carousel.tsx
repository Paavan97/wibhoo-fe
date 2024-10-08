// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import one from "../../assets/Home/carosuel1.png";
// import two from "../../assets/Home/carosuel2.png";
// import three from "../../assets/Home/carosuel3.png";
// import four from "../../assets/Home/carosuel4.png";

// const Wrapper = styled(Box)({
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

// const Container = styled(Box)({
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   position: "relative",
//   width: "80%",
//   height: "100%",
// });

// const Card = styled(Box)<{ checked?: boolean; image: string; bgColor: string }>(
//   ({ checked, image, bgColor }) => ({
//     width: checked ? "600px" : "100px",
//     height: "600px",
//     borderRadius: ".75rem",
//     backgroundSize: "cover",
//     cursor: "pointer",
//     overflow: "hidden",
//     margin: "0 10px",
//     display: "flex",
//     alignItems: "flex-end",
//     transition: "width 0.6s cubic-bezier(.28,-0.03,0,.99)",
//     boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.8)",
//     backgroundImage: checked ? `url(${image})` : "none",
//     backgroundColor: checked ? "transparent" : bgColor,
//     position: "relative",
//     zIndex: checked ? 10 : 1,
//   })
// );

// const Title = styled(Typography)<{ checked?: boolean }>(({ checked }) => ({
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: checked
//     ? "translate(-50%, -50%)"
//     : "translate(-50%, -50%) rotate(270deg)",
//   color: checked ? "transparent" : "#111917",
//   fontWeight: "bold",
//   textTransform: "uppercase",
//   textAlign: "center",
//   width: "100%",
//   whiteSpace: "nowrap",
// }));

// const Description = styled(Box)<{ checked?: boolean }>(({ checked }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "520px",
//   height: "150px",
//   opacity: checked ? 1 : 0,
//   transform: checked ? "translateY(0)" : "translateY(30px)",
//   transition: "all 0.3s ease",
// }));

// const descriptions = [
//   {
//     id: "c1",
//     title: "Planet- Friendly Products",
//     text: "Discover products that prioritize sustainability and reduce environmental impact.",
//     image: one,
//     bgColor: "rgb(68, 222, 125)",
//     bName: "Shop Products",
//   },
//   {
//     id: "c2",
//     title: "Practical Services",
//     text: "Access sustainable services designed to simplify your eco-friendly routines.",
//     image: two,
//     bgColor: "#FF6364",
//     bName: "Explore Services",
//   },
//   {
//     id: "c3",
//     title: "Places & Spaces",
//     text: "Find sustainable destinations where you can connect & rejuvenate.",
//     image: three,
//     bgColor: "#12CD7E",
//     bName: "Discover Places",
//   },
//   {
//     id: "c4",
//     title: "Collaborative Communities",
//     text: "Join vibrant communities and Events dedicated to conscious living.",
//     image: four,
//     bgColor: "#fff",
//     bName: "Connect With Like-Minds",
//   },
// ];

// const Carousel = () => {
//   const [selected, setSelected] = React.useState("c1");

//   return (
//     <Wrapper>
//       <Container>
//         <RadioGroup
//           value={selected}
//           onChange={(e) => setSelected(e.target.value)}
//           row
//         >
//           {descriptions.map((desc) => (
//             <FormControlLabel
//               key={desc.id}
//               value={desc.id}
//               control={<Radio sx={{ display: "none" }} />}
//               label={
//                 <Card
//                   image={desc.image}
//                   checked={selected === desc.id}
//                   bgColor={desc.bgColor}
//                 >
//                   <Title checked={selected === desc.id}>{desc.title}</Title>
//                   {selected === desc.id && (
//                     <Description checked={selected === desc.id}>
//                       <Typography
//                         variant="h5"
//                         sx={{ textTransform: "uppercase", textAlign: "center" }}
//                       >
//                         {desc.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{ paddingTop: "5px", textAlign: "center" }}
//                       >
//                         {desc.text}
//                       </Typography>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         sx={{
//                           marginTop: "10px",
//                           backgroundColor: "rgb(68, 222, 125)",
//                           color: "black",
//                           "&:hover": { backgroundColor: "#112121" },
//                         }}
//                       >
//                         {desc.bName}
//                       </Button>
//                     </Description>
//                   )}
//                 </Card>
//               }
//             />
//           ))}
//         </RadioGroup>
//       </Container>
//     </Wrapper>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import one from "../../assets/Home/carosuel1.png";
import two from "../../assets/Home/carosuel2.png";
import three from "../../assets/Home/carosuel3.png";
import four from "../../assets/Home/carosuel4.png";

const Carousel = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const banners = [
    {
      title: "Planet-Friendly Products",
      description:
        "Discover products that prioritize sustainability and reduce environmental impact.",
      image: one,
      buttonText: "Shop Products",
      bgColor: "gold",
    },
    {
      title: "Practical Services",
      description:
        "Access sustainable services designed to simplify your eco-friendly routines.",
      image: two,
      buttonText: "Explore Services",
      bgColor: "green",
    },
    {
      title: "Places & Spaces",
      description:
        "Find sustainable destinations where you can connect & rejuvenate.",
      image: three,
      buttonText: "Discover Places",
      bgColor: "orange",
    },
    {
      title: "Collaborative Communities",
      description:
        "Join vibrant communities and Events dedicated to conscious living",
      image: four,
      buttonText: "Connect With Like-Minds",
      bgColor: "gray",
    },
  ];

  const handleBannerClick = (index: any) => {
    if (openIndex === index) {
      return; // Do nothing if the clicked banner is already open
    }
    setOpenIndex(index); // Set the new index to open the clicked banner
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        padding: "20px",
        justifyContent: "center",
        // width: "80%",
      }}
    >
      {banners.map((banner, index) => (
        <Box
          key={index}
          onClick={() => handleBannerClick(index)}
          sx={{
            width:
              openIndex === index
                ? { xs: "100%", md: "70%" }
                : { xs: "100%", md: "100px" },
            height:
              openIndex === index
                ? { xs: "500px", md: "550px" }
                : { xs: "100px", md: "550px" },
            cursor: "pointer",
            // border: "1px solid #ccc",
            display: "flex",
            alignItems: openIndex === index ? "flex-end" : "center",
            justifyContent: "center",
            transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
            background:
              openIndex === index
                ? `url(${banner.image}) no-repeat center/contain`
                : "transparent",
            position: "relative",
            backgroundColor: banner.bgColor,
            color: "black",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              // padding: openIndex === index ? "0" : "8px",
              textAlign: "center",
              transition: "all 0.3s ease-in-out",
              borderRadius: "20px",
              color: "#fff",
              padding: openIndex === index ? { xs: "10px", md: "50px" } : "0px",
              backgroundColor:
                openIndex === index ? "rgba(0, 0, 0, 0.8)" : "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              marginBottom:
                openIndex === index ? { xs: "10px", md: "50px" } : "0px",
              alignItems: "center",
            }}
          >
            {openIndex !== index && (
              <Typography
                sx={{
                  writingMode: { xs: "", md: "vertical-lr" },
                  transform: { xs: "", md: "rotate(180deg)" },
                }}
                variant="h6"
              >
                {banner.title}
              </Typography>
            )}
            {openIndex === index && (
              <>
                <Typography variant="h6">{banner.title}</Typography>
                <Typography variant="body1" sx={{ marginTop: "8px" }}>
                  {banner.description}
                </Typography>
                <Button variant="contained" sx={{ marginTop: "16px" }}>
                  {banner.buttonText}
                </Button>
              </>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
