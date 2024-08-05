import { Box, Divider } from "@mui/material";
import wibhooIcon from "../assets/dark 1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ padding: "80px 30px" }}>
      <Divider
        sx={{ height: "0.1px", backgroundColor: "#12CD7E" }}
        variant="fullWidth"
      />
      <Box
        sx={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { sm: "row", xs: "column" },
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: { sm: "30%", xs: "90%" },
          }}
        >
          <Box>
            <img
              src={wibhooIcon}
              alt="whibhooicon"
              style={{ height: "70px" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: { sm: "30%", xs: "90%" },
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
            <Box sx={{ fontSize: "16px", fontWeight: "600", color: "#112121" }}>
              4 Pillars
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "13px",
                cursor: "pointer",
              }}
            >
              <Link
                to={"/Product"}
                style={{
                  fontSize: "14px",
                  color: "#112121",
                }}
                className="FooterPagesHover"
              >
                Products
              </Link>
              <Link
                to={"/service"}
                style={{
                  fontSize: "14px",
                  color: "#112121",
                }}
                className="FooterPagesHover"
              >
                Services
              </Link>
              <Link
                to={"/places-spaces"}
                style={{
                  fontSize: "14px",
                  color: "#112121",
                }}
                className="FooterPagesHover"
              >
                Places
              </Link>
              <Link
                to={"/communities"}
                style={{
                  fontSize: "14px",
                  color: "#112121",
                }}
                className="FooterPagesHover"
              >
                Communities
              </Link>
            </Box>
          </Box>
          <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
            <Box sx={{ fontSize: "18px", fontWeight: "600", color: "#112121" }}>
              About us
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "13px",
                cursor: "pointer",
              }}
            >
              <Link
                to={"/what-is-wibhoo"}
                style={{
                  fontSize: "14px",
                  color: "#112121",
                }}
                className="FooterPagesHover"
              >
                Our Story
              </Link>
              <Link
                to={"/how-we-onboard"}
                style={{
                  fontSize: "14px",
                  color: "#112121",
                }}
                className="FooterPagesHover"
              >
                Our Approach
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Divider
          sx={{ height: "1px", backgroundColor: "#12CD7E" }}
          variant="fullWidth"
        />
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Box sx={{ color: "gray", fontSize: "18px" }}>Follow us:</Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#112121",
                fontSize: "30px",
              }}
            >
              <i className="fa-brands fa-facebook-f" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#112121",
                fontSize: "30px",
              }}
            >
              <i className="fa-brands fa-x-twitter" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#112121",
                fontSize: "30px",
              }}
            >
              <i className="fa-brands fa-instagram" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            flexDirection: { sm: "row", xs: "column" },
            cursor: "pointer",
          }}
        >
          <Link
            to={"/terms"}
            style={{ color: "#112121", fontSize: "20px" }}
            className="FooterPagesHover"
          >
            Terms of Service
          </Link>
          <Link
            to={"/shipping"}
            style={{ color: "#112121", fontSize: "20px" }}
            className="FooterPagesHover"
          >
            Shipping & Return
          </Link>
          <Link
            to={"/privacy"}
            style={{ color: "#112121", fontSize: "20px" }}
            className="FooterPagesHover"
          >
            Privacy
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
