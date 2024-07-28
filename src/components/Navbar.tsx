import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import WibhooIcon from "../assets/dark 1.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const menuItems = [
    { text: "Home", path: "home" },
    {
      text: "Shop",
      subMenu: [
        { text: "Home & Living", path: "products/home-living" },
        { text: "Fashion & Clothing", path: "products/fashion-clothing" },
        { text: "Beauty & Care", path: "products/beauty-care" },
        { text: "Eat & Drink", path: "products/eat-drink" },
        { text: "Lifestyle Essentials", path: "products/lifestyle-essentials" },
      ],
    },
    {
      text: "Use",
      subMenu: [
        { text: "Wellbeing & Care", path: "use/wellbeing-care" },
        { text: "Eco-Tourism", path: "use/eco-tourism" },
        { text: "Waste Management", path: "use/waste-management" },
        { text: "Home & Garden", path: "use/home-garden" },
        { text: "Event Planning", path: "use/event-planning" },
        { text: "Building & Architecture", path: "use/building-architecture" },
        { text: "Transport & Logistic", path: "use/transport-logistic" },
        { text: "Green Energy & Audits", path: "use/green-energy-audits" },
      ],
    },
    { text: "Places", path: "places-spaces" },
    { text: "Communities", path: "communities" },
    {
      text: "Our Story",
      subMenu: [
        { text: "What Is Wibhoo", path: "what-is-wibhoo" },
        { text: "How We Onboard", path: "how-we-onboard" },
      ],
    },
  ];

  const handleSubmenuToggle = (
    menu: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    setOpenSubmenu((prevOpenSubmenu) => ({
      ...prevOpenSubmenu,
      [menu]: !prevOpenSubmenu[menu],
    }));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
          height: "80px",
          padding: { sm: "0px 0px 0px 100px", xs: "0px 0px 0px 20px" },
        }}
      >
        <Box>
          <img style={{ width: "80px" }} src={WibhooIcon} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: { sm: "60px", xs: "30px" },
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box sx={{ color: "white" }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Box>
            <Box
              sx={{
                color: "white",
                fontSize: "20px",
                display: { sm: "block", xs: "none" },
              }}
            >
              Search
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box sx={{ color: "white" }}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Box>
            <Box
              sx={{
                color: "white",
                fontSize: "20px",
                display: { sm: "block", xs: "none" },
              }}
            >
              Cart
            </Box>
          </Box>
          <Box
            component={Button}
            onClick={toggleDrawer(true)}
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              backgroundColor: "#9cf5b8",
              width: "100px",
              justifyContent: "center",
            }}
          >
            <Box sx={{ color: "white" }}>
              <i className="fa-solid fa-bars"></i>
            </Box>
            <Box sx={{ color: "white", fontSize: "20px" }}>Menu</Box>
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{ width: { sm: "60%", xs: "100%" } }}>
        <Box
          sx={{ width: { sm: "35%", xs: "100%", backgroundColor: "#9cf5b8" } }}
        ></Box>
        <Box
          sx={{ width: { sm: "65%", xs: "100%", backgroundColor: "#111917" } }}
        >
          <Box sx={{ color: "white" }}>
            <i className="fa-solid fa-xmark"></i>
          </Box>
          <Box sx={{ color: "white", fontSize: "20px" }}>Close</Box>
        </Box>
      </Box> */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#111917", color: "white" },
        }} // Set drawer background color
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          ></Box>
          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.text}>
                <ListItem
                  button
                  component={Link}
                  to={item.path || "#"}
                  onClick={(event) =>
                    item.subMenu
                      ? handleSubmenuToggle(item.text, event)
                      : undefined
                  }
                >
                  <ListItemText primary={item.text} />
                  {/* {item.subMenu ? (
                    openSubmenu[item.text] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null} */}
                </ListItem>
                {item.subMenu && (
                  <Collapse
                    in={openSubmenu[item.text]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subMenu.map((subItem) => (
                        <ListItem
                          key={subItem.text}
                          button
                          component={Link}
                          to={`/${subItem.path}`}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={subItem.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
