import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Backdrop, Dialog, Grid, Slide, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom for routing
import wibhooIcon from "../assets/dark 1.png";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SlideTransition = (props: any) => {
  return <Slide direction="down" {...props} />;
};

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:767px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState<string>("");
  const [showSubMenu, setShowSubMenu] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (menu: string) => {
    if (selectedMenu === menu) {
      setShowSubMenu(!showSubMenu); // Toggle submenu if already selected
    } else {
      setSelectedMenu(menu);
      setShowSubMenu(true); // Open submenu
    }
  };

  const handleBackClick = () => {
    setShowSubMenu(false);
    setSelectedMenu(""); // Go back to the main menu
  };

  const mainMenus = [
    {
      name: "Home",
      path: "/",
    },
    { name: "Shop", path: "" },
    { name: "Use", path: "" },
    { name: "Places", path: "/places-spaces" },
    { name: "Communities", path: "/communities" },
    { name: "Our Story", path: "" },
  ];

  const subMenus: {
    [key: string]: {
      items: { name: string; path: string }[];
      description: string;
    };
  } = {
    Home: {
      items: [{ name: "", path: "/" }],
      description:
        "At Wibhoo, we prioritize making conscious living easy and accessible by emphasizing local solutions. This not only helps boost the local economy but also reduces negative environmental impacts.",
    },
    Shop: {
      items: [
        { name: "Home & Living", path: "/products/home-living" },
        { name: "Fashion & Clothing", path: "/products/fashion-clothing" },
        { name: "Beauty & Care", path: "/products/beauty-care" },
        { name: "Eat & Drink", path: "/products/eat-drink" },
        {
          name: "Lifestyle Essentials",
          path: "/products/lifestyle-essentials",
        },
      ],
      description:
        "Discover products that prioritize sustainability and reduce environmental impact.",
    },
    Use: {
      items: [
        { name: "Wellbeing & Care", path: "/use/wellbeing-care" },
        { name: "Eco-Tourism", path: "/use/eco-tourism" },
        { name: "Waste Management", path: "/use/waste-management" },
        { name: "Home & Garden", path: "/use/home-garden" },
        { name: "Event Planning", path: "/use/event-planning" },
        { name: "Building & Architecture", path: "/use/building-architecture" },
        { name: "Transport & Logistic", path: "/use/transport-logistic" },
        { name: "Green Energy & Audits", path: "/use/green-energy-audits" },
      ],
      description:
        "Access sustainable services designed to simplify your eco-friendly routines.",
    },
    Places: {
      items: [{ name: "", path: "/places-spaces" }],
      description:
        "Discover products that prioritize sustainability and reduce environmental impact.",
    },
    Communities: {
      items: [{ name: "", path: "/communities" }],
      description:
        "Join vibrant communities and Events dedicated to conscious living",
    },
    "Our Story": {
      items: [
        { name: "What is Wibhoo", path: "/what-is-wibhoo" },
        { name: "How We Onboard", path: "/how-we-onboard" },
      ],
      description: "Learn more about our journey and values.",
    },
  };

  const menuId = "primary-search-account-menu";

  const location = useLocation();
  const [activeMenu, setActiveMenu] = React.useState("");
  const [activeSubMenu, setActiveSubMenu] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSearchClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const path = location.pathname;

    // Find the active main menu
    const activeMain = mainMenus.find(
      (menu) => menu.path && path.startsWith(menu.path)
    );
    if (activeMain) {
      setActiveMenu(activeMain.name);

      // Find the active submenu if it exists
      if (subMenus[activeMain.name]) {
        const activeSub = subMenus[activeMain.name].items.find((item) =>
          path.startsWith(item.path)
        );
        if (activeSub) {
          setActiveSubMenu(activeSub.path);
        } else {
          setActiveSubMenu("");
        }
      } else {
        setActiveSubMenu("");
      }
    } else {
      setActiveMenu("");
      setActiveSubMenu("");
    }
  }, [location]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#272727" }}>
          <Box>
            <img src={wibhooIcon} alt="wibhooicon" style={{ height: "70px" }} />
          </Box>
          <Search onClick={handleSearchClick}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog
        sx={{
          backgroundColor: "#fff",
          height: "50%",
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        BackdropComponent={Backdrop}
        // BackdropProps={{
        //   style: {
        //     backgroundColor: "rgba(0, 0, 0, 0.5)",
        //     backdropFilter: "blur(4px)",
        //   },
        // }}
        PaperProps={{
          style: {
            width: "50%",
            margin: "auto",
            // top: "25%",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Dialog>

      {/* <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Dialog> */}

      <Drawer
        anchor="right"
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#111917",
            color: "white",
            width: { xs: "80%", sm: "80%", md: 500 },
            overflowX: "hidden",
          },
        }}
        onClose={handleDrawerToggle}
      >
        {isMobile ? (
          <Box
            sx={{
              backgroundColor: showSubMenu ? "#9cf5b8" : "",
              width: "100%",
              height: "100%",
            }}
          >
            {showSubMenu ? (
              <Box>
                <IconButton onClick={handleBackClick} sx={{ m: 2 }}>
                  Back
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: "black", px: 2 }}
                >
                  {subMenus[selectedMenu]?.description}
                </Typography>
                <List>
                  {subMenus[selectedMenu]?.items.map((item) => (
                    <ListItem
                      button
                      key={item.path}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: "black",
                        "&:hover": {
                          backgroundColor: "#9cf5b8", // Green background on hover
                          color: "white", // White text color on hover
                        },
                      }}
                      onClick={() => {
                        setDrawerOpen(false);
                        setShowSubMenu(false);
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : (
              <>
                <List>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={wibhooIcon}
                      alt="wibhooicon"
                      style={{ height: "70px" }}
                    />
                  </Box>
                  {mainMenus.map((menu) => (
                    <ListItem
                      button
                      component={menu.path ? Link : "div"}
                      to={menu.path || undefined}
                      key={menu.name}
                      onClick={() => {
                        if (subMenus[menu.name]) {
                          handleMenuItemClick(menu.name);
                          if (menu.path) {
                            setDrawerOpen(false);
                          }
                        }
                      }}
                      sx={{
                        textAlign: "center",
                        marginTop: "20px",
                        backgroundColor:
                          selectedMenu === menu.name ? "#9cf5b8" : "inherit",
                        color: selectedMenu === menu.name ? "black" : "inherit",
                        "&:hover": {
                          backgroundColor: "#9cf5b8",
                          color: "black",
                        },
                      }}
                    >
                      <ListItemText primary={menu.name} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Box>
        ) : (
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={6} sx={{ backgroundColor: "#111917" }}>
              <List sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={wibhooIcon}
                    alt="wibhooicon"
                    style={{ height: "70px" }}
                  />
                </Box>
                {mainMenus.map((menu) => (
                  <ListItem
                    button
                    component={menu.path ? Link : "div"}
                    to={menu.path || undefined}
                    key={menu.name}
                    onClick={() => {
                      if (subMenus[menu.name]) {
                        handleMenuItemClick(menu.name);
                        if (menu.path) {
                          setDrawerOpen(false);
                        }
                      }
                    }}
                    sx={{
                      textAlign: "center",
                      marginTop: "20px",
                      backgroundColor:
                        selectedMenu === menu.name ? "#9cf5b8" : "inherit",
                      color: selectedMenu === menu.name ? "black" : "inherit",
                      "&:hover": {
                        backgroundColor: "#9cf5b8",
                        color: "black",
                      },
                    }}
                  >
                    <ListItemText primary={menu.name} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: "#9cf5b8", p: 2 }}>
              {selectedMenu && (
                <>
                  <Typography variant="body2" sx={{ mt: 8, color: "black" }}>
                    {subMenus[selectedMenu]?.description}
                  </Typography>
                  <List>
                    {subMenus[selectedMenu]?.items.map((item) => (
                      <ListItem
                        button
                        key={item.path}
                        component={Link}
                        to={item.path}
                        onClick={() => {
                          setDrawerOpen(false);
                          setShowSubMenu(false);
                        }}
                        sx={{
                          color: "black",
                          "&:hover": {
                            backgroundColor: "#9cf5b8", // Green background on hover
                            color: "white", // White text color on hover
                          },
                        }}
                      >
                        <ListItemText primary={item.name} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Grid>
          </Grid>
        )}
      </Drawer>
    </Box>
  );
}
