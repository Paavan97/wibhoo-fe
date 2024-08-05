import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import image1 from "../assets/WhatIsWibhoo/goal_align_8.png";
import image2 from "../assets/WhatIsWibhoo/goal_align_9.png";
import image3 from "../assets/WhatIsWibhoo/goal_align_11.png";
import image4 from "../assets/WhatIsWibhoo/goal_align_12.png";
import image5 from "../assets/WhatIsWibhoo/goal_align_13.png";
import image6 from "../assets/WhatIsWibhoo/goal_align_14.png";
import image7 from "../assets/WhatIsWibhoo/goal_align_15.png";
import image8 from "../assets/WhatIsWibhoo/goal_align_17.png";
import banner from "../assets/WhatIsWibhoo/Poatry.png";
import Top from "/images/bottom.png";
import Bottom from "/images/Top.png";
import Top1 from "/images/Top1.png";
import Bottom1 from "/images/Bottom1.png";
import { useEffect } from "react";

const WhatIsWibhoo = () => {
  const images = [
    { id: 1, src: image1, title: "Image 1" },
    { id: 2, src: image2, title: "Image 2" },
    { id: 3, src: image3, title: "Image 3" },
    { id: 4, src: image4, title: "Image 4" },
    { id: 5, src: image5, title: "Image 5" },
    { id: 6, src: image6, title: "Image 6" },
    { id: 7, src: image7, title: "Image 7" },
    { id: 8, src: image8, title: "Image 8" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "100px",

        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // textAlign: "justify",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          // padding: "20px",
          color: "#112121",

          borderRadius: "20px",
          gap: "30px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#8FE1AA",
            marginY: { xs: "20px", md: "30px" },
          }}
        >
          Our Story
        </Typography>
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
              // marginTop: "70px",
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
              gap: "50px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#12CD7E",
            }}
          >
            <Box sx={{ marginTop: "10px", padding: "20px" }}>
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "10px",
                  color: "#111917",
                }}
              >
                What is Wibhoo?
              </Typography>
              <Typography variant="h6" sx={{ lineHeight: "2" }}>
                Wibhoo is your gateway to effortless conscious living. We've
                curated a diverse ecosystem where sustainability meets
                convenience, offering everything you need to embrace a mindful
                lifestyle. From eco-conscious products to practical services,
                rejuvenating destinations, and inspiring communities, Wibhoo
                makes it easy for you to make a positive impact on the planet
                and connect with like-minded individuals. With a focus on
                accessibility and collaboration, we're committed to empowering
                you to live more sustainably, one mindful choice at a time.
              </Typography>
            </Box>
            <Box sx={{ padding: "20px" }}>
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "10px",
                  color: "#111917",
                }}
              >
                How do we see the world after Wibhoo ?
              </Typography>
              <Typography variant="h6" sx={{ lineHeight: "2" }}>
                Our vision at Wibhoo is to create a world where conscious living
                is not just a choice, but a way of life embraced by all. We
                envision a future where sustainability is seamlessly integrated
                into every aspect of daily life, where individuals are empowered
                to make informed and ethical choices that benefit both
                themselves and the planet. Through Wibhoo, we aspire to foster a
                global community that prioritizes environmental stewardship,
                social responsibility, and holistic well-being. We envision a
                world where every action, no matter how small, contributes to a
                brighter, more sustainable future for generations to come.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              // marginTop: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={Bottom} // Replace with the actual image path
              alt="Above Product Grid"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          marginTop: "50px",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "fit-content",
            width: { md: "45%", xs: "100%" },
          }}
        >
          <img style={{ width: "100%" }} src={banner} alt="bannerimage" />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { md: "45%", xs: "100%" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { md: "start", xs: "center" },
            height: "auto",
            gap: "40px",
          }}
        >
          <Box sx={{ fontSize: "2.5rem", color: "lightgreen" }}>
            The Philosophy
          </Box>
          <Box
            sx={{
              color: "#112121",
              fontSize: "20px",
              lineHeight: 2,
              padding: "20px",
            }}
          >
            In a world where everyone seeks balance and happiness, Wibhoo offers
            more than just sustainability. It's about living well in every
            aspect of life. At Wibhoo, we understand that being mindful goes
            beyond just helping the planet. It's also about feeling good
            physically, mentally, and emotionally. That's why we've created a
            place where you can find everything you need for a conscious and
            satisfying life.
          </Box>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <Box sx={{ fontSize: "40px", color: "#12CD7E" }}>
              <i className="fa-solid fa-atom"></i>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Box
                sx={{ fontSize: "22px", fontWeight: "700", color: "#112121" }}
              >
                All-in-One Hub
              </Box>
              <Box sx={{ fontSize: "20px", color: "#112121", lineHeight: 2 }}>
                Wibhoo serves as a comprehensive oasis where individuals can
                find everything they need to lead a conscious and fulfilling
                life. From sustainable products to holistic services, we strive
                to provide a one-stop destination for all aspects of conscious
                living.
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <Box sx={{ fontSize: "40px", color: "#12CD7E" }}>
              <i className="fa-solid fa-map-location-dot"></i>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Box
                sx={{ fontSize: "22px", fontWeight: "700", color: "#112121" }}
              >
                Local Love
              </Box>
              <Box sx={{ fontSize: "20px", color: "#112121", lineHeight: 2 }}>
                We're big fans of supporting local businesses and communities.
                By prioritizing nearby vendors and artisans, we not only reduce
                carbon emissions associated with transportation but also
                contribute to the growth and prosperity of local economies. When
                you shop on Wibhoo, you're not just making a purchase – you're
                supporting your neighbors and fostering a sense of community.
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <Box sx={{ fontSize: "40px", color: "#12CD7E" }}>
              <i className="fa-solid fa-dove"></i>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Box
                sx={{ fontSize: "22px", fontWeight: "700", color: "#112121" }}
              >
                Artful Living
              </Box>
              <Box sx={{ fontSize: "20px", color: "#112121", lineHeight: 2 }}>
                In conscious living, nurturing the creative spirit is not just
                about artistic expression—it's about fostering deeper
                connections with ourselves, each other, and the world around us.
                Literature, Music, and art are not mere forms of entertainment;
                they are powerful mediums through which we can explore and
                understand complex emotions, reflect on our values, and inspire
                positive change. By curating offerings that encompass these
                artistic expressions, Wibhoo promotes a deeper sense of
                awareness and empathy, encouraging individuals to engage with
                the world more mindfully and compassionately.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          color: "#112121",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // padding: "0px 500px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#8FE1AA",
            marginTop: "48px",
          }}
        >
          Potential Impact in a Upcoming Year
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: { xs: "100%", md: "80%" },
            textAlign: "center",
            lineHeight: "2",
          }}
        >
          Measuring impact is crucial as it directs us towards achieving our
          ideal outcomes. Impact is the single most important factor that shapes
          our journey towards a better future.
        </Typography>
        <Timeline
          position={isMd ? "alternate-reverse" : "right"}
          sx={{
            padding: { md: "0px 150px", xs: "20px" },
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                margin: "50px 0px",
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
                display: { md: "flex", xs: "none" },
              }}
            >
              {/* <Box
                component="img"
                sx={{
                  width: "70%",
                }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/09d34d66-da21-4e2b-a01f-7cbd7cc8cef6.svg"
              /> */}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Box
                sx={{
                  borderRadius: "15px",
                  border: "1px solid gold",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "gold",
                }}
              >
                1
              </Box>
              <TimelineConnector sx={{ backgroundColor: "gold" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ margin: "50px 0px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "70%",
                    display: { md: "none", xs: "block" },
                  }}
                  // src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/09d34d66-da21-4e2b-a01f-7cbd7cc8cef6.svg"
                />
                <Box sx={{ color: "#12CD7E", fontSize: "22px" }}>
                  Environmental Impact
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                    color: "#112121",
                    fontSize: "18px",
                  }}
                >
                  <Box>
                    ► 12,000+ kg of direct plastic waste prevention from
                    polluting our environment, with multi-thousand kg in
                    collaboration efforts.
                  </Box>
                  <Box>
                    ► Offsetting 20,000 kg of direct CO2 emissions for cleaner
                    air.
                  </Box>
                  <Box>
                    ► Plantation of 1000 trees to achieve carbon neutrality.
                  </Box>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                margin: "50px 0px",
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
                display: { md: "flex", xs: "none" },
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "70%",
                }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0b982632-269e-4495-9531-179855eca08a.svg"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Box
                sx={{
                  borderRadius: "90%",
                  border: "1px solid gold",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "gold",
                }}
              >
                2
              </Box>
              <TimelineConnector sx={{ backgroundColor: "gold" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ margin: "50px 0px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "70%",
                    display: { md: "none", xs: "block" },
                  }}
                  src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0b982632-269e-4495-9531-179855eca08a.svg"
                />
                <Box sx={{ color: "#12CD7E", fontSize: "22px" }}>
                  Economic Impact
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                    color: "#112121",
                    fontSize: "18px",
                  }}
                >
                  <Box>► 300 jobs for sustainable livelihoods.</Box>
                  <Box>
                    ► 300+ partnerships with organizations, artisans, and
                    stakeholders.
                  </Box>
                  <Box>
                    ► Transactions worth ₹20,00,000, diverted to the climate
                    economy.
                  </Box>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                margin: "50px 0px",
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
                display: { md: "flex", xs: "none" },
              }}
            >
              {/* <Box
                component="img"
                sx={{
                  width: "70%",
                }}
                src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/7d091a32-a977-4ea8-aa8e-76ec010c7bdc.svg"
              /> */}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Box
                sx={{
                  borderRadius: "90%",
                  border: "1px solid gold",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "gold",
                }}
              >
                3
              </Box>
              <TimelineConnector sx={{ backgroundColor: "gold" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ margin: "50px 0px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "70%",
                    display: { md: "none", xs: "block" },
                  }}
                  // src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/7d091a32-a977-4ea8-aa8e-76ec010c7bdc.svg"
                />
                <Box sx={{ color: "#12CD7E", fontSize: "22px" }}>
                  Social Impact
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                    color: "#112121",
                    fontSize: "18px",
                  }}
                >
                  <Box>
                    ► 10+ Enriching events through strategic partnerships,
                    promoting sustainability, creativity, and social impact.
                  </Box>
                  <Box>
                    ► 10+ volunteer programs focused on environmental
                    conservation, social welfare, and community development.
                  </Box>
                  <Box>
                    ► 20+ workshops with experts and thought leaders on
                    sustainable living, wellness, art, and personal development.
                  </Box>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              // marginTop: "70px",
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
          <Box sx={{ backgroundColor: "#FF6364", padding: "20px 0px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "32px" },
                  fontWeight: "600",
                  marginBottom: "10px",
                  color: "#111917",
                  textAlign: "center",
                }}
              >
                Sustainable Development Goals we align with
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              <Grid container spacing={2}>
                {images.map((image) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={image.id}
                    sx={{ marginTop: { xs: "20px" } }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        style={{ width: "80%", borderRadius: "8px" }}
                      />
                      {/* <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                {image.title}
              </Typography> */}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              // marginTop: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={Bottom1} // Replace with the actual image path
              alt="Above Product Grid"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatIsWibhoo;
