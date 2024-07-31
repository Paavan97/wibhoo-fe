import { Box, useMediaQuery, useTheme } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Top from "../../public/images/bottom.png";
import Bottom from "../../public/images/Top.png";

const HowWeOnBoard = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box sx={{ color: "#9cf5b8", fontSize: "2em" }}>
          What do we see before onboarding
        </Box>
        <Box sx={{ color: "white", fontSize: "18px" }}>
          Before onboarding any options, Wibhoo conducts a rigorous vetting
          process to ensure authenticity and alignment with our values. We
          analyze multiple data points and verify claims to validate their
          sustainability. Our method involves cross-referencing information from
          various sources, including official certifications, customer reviews,
          and third-party audits. We thoroughly check the background of each
          option, assessing factors like ethical sourcing, environmental impact,
          and social responsibility. Additionally, we request supporting
          documentation and evidence to substantiate their claims. This
          meticulous approach ensures that only genuine and trustworthy options
          are welcomed into the Wibhoo community, providing users with
          confidence in their choices.
        </Box>
      </Box>
      <Box>
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
            display: "flex",
            gap: "50px",
            alignItems: "center",
            background: "#9cf5b8",
            flexDirection: { md: "row", xs: "column-reverse" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "fit-content",
              width: { md: "45%", xs: "100%" },
            }}
          >
            <img
              style={{ width: "90%" }}
              src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/4555e2ad-543d-41c7-bdf0-33e03f202015.png"
              alt="bannerimage"
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
              gap: "40px",
            }}
          >
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-check-double"></i>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Certification Verification
                </Box>
                <Box sx={{ fontSize: "18px", color: "white" }}>
                  We verify certifications claimed by partners to validate their
                  compliance with sustainability standards.
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-glasses"></i>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Supply Chain Transparency
                </Box>
                <Box sx={{ fontSize: "18px", color: "white" }}>
                  We assess the transparency of partners' supply chains to
                  ensure ethical sourcing and production practices.
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-seedling"></i>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Environmental Impact Assessment
                </Box>
                <Box sx={{ fontSize: "18px", color: "white" }}>
                  We evaluate the environmental impact of partners' products or
                  services, considering factors such as carbon footprint, waste
                  generation, and resource consumption.
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-hand-holding-heart"></i>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Social Responsibility Initiatives
                </Box>
                <Box sx={{ fontSize: "18px", color: "white" }}>
                  We examine partners' initiatives aimed at promoting social
                  welfare, supporting local communities, and empowering
                  marginalized groups.
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-star"></i>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Product or Service Quality
                </Box>
                <Box sx={{ fontSize: "18px", color: "white" }}>
                  We assess the quality and performance of products or services
                  offered by partners to ensure they meet our standards of
                  excellence.
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Box sx={{ fontSize: "40px", color: "#9cf5b8" }}>
                <i className="fa-solid fa-ear-listen"></i>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Customer Feedback and Reviews
                </Box>
                <Box sx={{ fontSize: "18px", color: "white" }}>
                  We consider feedback and reviews from customers to gauge the
                  satisfaction level and overall reputation of partners.
                </Box>
              </Box>
            </Box>
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
      <Box sx={{ marginTop: "100px", textAlign: "center" }}>
        <Box sx={{ fontSize: "2em", color: "#9cf5b8" }}>
          For the vetting process, we scrutinize partners based on a set of key
          criteria to ensure alignment with Wibhoo's mission and values:
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Timeline
            position={isMd ? "alternate" : "right"}
            sx={{
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
                <Box
                  component="img"
                  sx={{
                    width: "70%",
                  }}
                  src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/09d34d66-da21-4e2b-a01f-7cbd7cc8cef6.svg"
                />
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
                    src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/09d34d66-da21-4e2b-a01f-7cbd7cc8cef6.svg"
                  />
                  <Box sx={{ color: "#9cf5b8", fontSize: "22px" }}>
                    Environment Impect
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "25px",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    <Box>
                      <Box> 1) Promotion of Circularity:</Box>
                      <Box>
                        Emphasizing closed-loop systems and waste reduction.
                      </Box>
                    </Box>
                    <Box>
                      <Box> 2) Sustainable Packaging:</Box>
                      <Box>Use of eco-friendly packaging materials.</Box>
                    </Box>
                    <Box>
                      <Box>3) Sustainable Materials:</Box>
                      <Box>
                        Preference for renewable, recycled, or responsibly
                        sourced materials.
                      </Box>
                    </Box>
                    <Box>
                      <Box>4) Low Waste Practices:</Box>
                      <Box>
                        Commitment to minimizing waste throughout the production
                        process.
                      </Box>
                    </Box>
                    <Box>
                      <Box>5) Carbon Offsetting:</Box>
                      <Box>
                        Efforts to offset carbon emissions through sustainable
                        practices or initiatives.
                      </Box>
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
                  src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/70c389a1-5cd7-4ca9-9b49-3ad82e85d233.svg"
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
                    src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/70c389a1-5cd7-4ca9-9b49-3ad82e85d233.svg"
                  />
                  <Box sx={{ color: "#9cf5b8", fontSize: "22px" }}>
                    Workers Wellbeing
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "25px",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    <Box>
                      <Box>1) Fair Trade Practices:</Box>
                      <Box>
                        Ensuring fair compensation and working conditions for
                        workers.
                      </Box>
                    </Box>
                    <Box>
                      <Box>2) Ethical Labour Standards:</Box>
                      <Box>
                        Adherence to ethical labor practices and human rights.
                      </Box>
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
                  src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/7d091a32-a977-4ea8-aa8e-76ec010c7bdc.svg"
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
                    src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/7d091a32-a977-4ea8-aa8e-76ec010c7bdc.svg"
                  />
                  <Box sx={{ color: "#9cf5b8", fontSize: "22px" }}>
                    Healthy Living
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "25px",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    <Box>
                      <Box>1) Certified Organic Products:</Box>
                      <Box>
                        Offering certified organic products free from synthetic
                        chemicals.
                      </Box>
                    </Box>
                    <Box>
                      <Box>2) Non-Toxic Ingredients:</Box>
                      <Box>
                        Use of non-toxic and environmentally safe materials.
                      </Box>
                    </Box>
                    <Box>
                      <Box>3) Certified Natural:</Box>
                      <Box>
                        Products verified to contain natural ingredients without
                        harmful additives.
                      </Box>
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
                  src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0ca4732e-80ba-404d-9f39-5c7d62ce63c0.svg"
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
                  4
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
                    src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0ca4732e-80ba-404d-9f39-5c7d62ce63c0.svg"
                  />
                  <Box sx={{ color: "#9cf5b8", fontSize: "22px" }}>
                    Animal Welfare
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "25px",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    <Box>
                      <Box>1) Vegan Products:</Box>
                      <Box>
                        Products that are free from animal-derived ingredients.
                      </Box>
                    </Box>
                    <Box>
                      <Box>2) Cruelty-Free:</Box>
                      <Box>
                        Assurance that products are not tested on animals.
                      </Box>
                    </Box>
                    <Box>
                      <Box>3) Responsibly Sourced Animal Ingredients:</Box>
                      <Box>
                        Ethical sourcing of animal-derived ingredients with
                        consideration for animal welfare.
                      </Box>
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
                  src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0d4ccaec-7004-4237-9edd-cdeafbc572cf.svg"
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
                  5
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
                    src="https://assets.softr-files.com/applications/c0ac6f53-6da2-478a-aad1-cae10656e61a/assets/0d4ccaec-7004-4237-9edd-cdeafbc572cf.svg"
                  />
                  <Box sx={{ color: "#9cf5b8", fontSize: "22px" }}>
                    Social Welfare
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "25px",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    <Box>
                      <Box>1) Support for Self-Help Groups:</Box>
                      <Box>
                        Collaboration with self-help groups to empower
                        marginalized communities.
                      </Box>
                    </Box>
                    <Box>
                      <Box>2) Artisan Involvement:</Box>
                      <Box>
                        Engagement with local artisans to promote traditional
                        craftsmanship.
                      </Box>
                    </Box>
                    <Box>
                      <Box>3) Tribal Worker Support:</Box>
                      <Box>
                        Initiatives to support tribal workers and preserve
                        indigenous practices.
                      </Box>
                    </Box>
                    <Box>
                      <Box>4) Underprivileged Initiatives:</Box>
                      <Box>
                        Programs aimed at supporting underprivileged inBoxiduals
                        and communities.
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeOnBoard;
