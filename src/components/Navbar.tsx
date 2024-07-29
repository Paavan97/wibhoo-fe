import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Grid, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom for routing
import wibhooIcon from "../assets/dark 1.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
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

export default function Navbar() {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:767px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState<string>("");
  const [showSubMenu, setShowSubMenu] = React.useState<boolean>(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  React.useEffect(() => {
    const currentPath = location.pathname;
    const activeMenu =
      Object.keys(subMenus).find((menu) =>
        subMenus[menu].items.some((item) => item.path === currentPath)
      ) || "Home";
    setSelectedMenu(activeMenu);
    setShowSubMenu(!!activeMenu && currentPath !== "/");
  }, [location.pathname]);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

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
    { name: "Shop", path: "/" },
    { name: "Use", path: "/" },
    { name: "Places", path: "/places" },
    { name: "Communities", path: "/" },
    { name: "Our Story", path: "/" },
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
        { name: "Home & Living", path: "/shop/home-living" },
        { name: "Fashion & Clothing", path: "/shop/fashion-clothing" },
        { name: "Beauty & Care", path: "/shop/beauty-care" },
        { name: "Eat & Drink", path: "/shop/eat-drink" },
        { name: "Lifestyle Essentials", path: "/shop/lifestyle-essentials" },
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
      items: [{ name: "", path: "/places" }],
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
        { name: "Page 1", path: "/our-story/page1" },
        { name: "Page 2", path: "/our-story/page2" },
      ],
      description: "Learn more about our journey and values.",
    },
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#272727" }}>
          <Box>
            <img src={wibhooIcon} alt="wibhooicon" style={{ height: "70px" }} />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
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
      {renderMobileMenu}
      {renderMenu}
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
                    >
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : (
              <List>
                {mainMenus.map((menu) => (
                  <ListItem
                    button
                    component={Link}
                    to={menu.path}
                    key={menu.name}
                    onClick={() => handleMenuItemClick(menu.name)}
                    sx={{
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
            )}
          </Box>
        ) : (
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={6} sx={{ backgroundColor: "#111917" }}>
              <List>
                {mainMenus.map((menu) => (
                  <ListItem
                    button
                    key={menu.path}
                    onClick={() => handleMenuItemClick(menu.name)}
                    sx={{
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
                  <Typography variant="body2" sx={{ mt: 2, color: "black" }}>
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
