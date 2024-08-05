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
import {
  Backdrop,
  Dialog,
  DialogContent,
  Grid,
  Slide,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom for routing
import wibhooIcon from "../assets/dark 1.png";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Close from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../Redux/App/hooks";
import { RootState } from "../Redux/App/store";
import { fetchAsyncCategories } from "../Redux/feature/CategorySlice";

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

const SlideTransition = (props: any) => {
  return <Slide direction="down" {...props} />;
};

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:767px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState<any>("");
  const [showSubMenu, setShowSubMenu] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.ProductCategory.categories
  );
  const categoriesStatus = useAppSelector(
    (state: RootState) => state.ProductCategory.categoriesStatus
  );

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (menuName: string) => {
    setSelectedMenu(menuName);
    if (menuName === "Shop") {
      setShowSubMenu(true);
    }
  };

  const handleBackClick = () => {
    setShowSubMenu(false);
    setSelectedMenu(""); // Go back to the main menu
  };

  // const mainMenus = [
  //   {
  //     name: "Home",
  //     path: "/",
  //   },
  //   { name: "Shop", path: "" },
  //   { name: "Use", path: "" },
  //   { name: "Places", path: "/places-spaces" },
  //   { name: "Communities", path: "/communities" },
  //   { name: "Our Story", path: "" },
  // ];

  // const subMenus: {
  //   [key: string]: {
  //     items: { name: string; path: string }[];
  //     description: string;
  //   };
  // } = {
  //   Home: {
  //     items: [{ name: "", path: "/" }],
  //     description:
  //       "At Wibhoo, we prioritize making conscious living easy and accessible by emphasizing local solutions. This not only helps boost the local economy but also reduces negative environmental impacts.",
  //   },
  //   Shop: {
  //     items: [
  //       { name: "Home & Living", path: "/category/home-living" },
  //       { name: "Fashion & Clothing", path: "/category/fashion-clothing" },
  //       { name: "Beauty & Care", path: "/category/beauty-care" },
  //       { name: "Eat & Drink", path: "/category/eat-drink" },
  //       {
  //         name: "Lifestyle Essentials",
  //         path: "/category/lifestyle-essentials",
  //       },
  //     ],
  //     description:
  //       "Discover products that prioritize sustainability and reduce environmental impact.",
  //   },
  //   Use: {
  //     items: [
  //       { name: "Wellbeing & Care", path: "/use/wellbeing-care" },
  //       { name: "Eco-Tourism", path: "/use/eco-tourism" },
  //       { name: "Waste Management", path: "/use/waste-management" },
  //       { name: "Home & Garden", path: "/use/home-garden" },
  //       { name: "Event Planning", path: "/use/event-planning" },
  //       { name: "Building & Architecture", path: "/use/building-architecture" },
  //       { name: "Transport & Logistic", path: "/use/transport-logistic" },
  //       { name: "Green Energy & Audits", path: "/use/green-energy-audits" },
  //     ],
  //     description:
  //       "Access sustainable services designed to simplify your eco-friendly routines.",
  //   },
  //   Places: {
  //     items: [{ name: "", path: "/places-spaces" }],
  //     description:
  //       "Discover products that prioritize sustainability and reduce environmental impact.",
  //   },
  //   Communities: {
  //     items: [{ name: "", path: "/communities" }],
  //     description:
  //       "Join vibrant communities and Events dedicated to conscious living",
  //   },
  //   "Our Story": {
  //     items: [
  //       { name: "What is Wibhoo", path: "/what-is-wibhoo" },
  //       { name: "How We Onboard", path: "/how-we-onboard" },
  //     ],
  //     description: "Learn more about our journey and values.",
  //   },
  // };
  const mainMenus = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "" },
    { name: "Use", path: "" },
    { name: "Places", path: "/places-spaces" },
    { name: "Communities", path: "/communities" },
    { name: "Our Story", path: "" },
  ];

  const subMenus = {
    Home: {
      items: [{ name: "", path: "/" }],
      description:
        "At Wibhoo, we prioritize making conscious living easy and accessible by emphasizing local solutions. This not only helps boost the local economy but also reduces negative environmental impacts.",
    },
    Shop: {
      description:
        "Discover products that prioritize sustainability and reduce environmental impact.",
    },
    Use: {
      description:
        "Access sustainable services designed to simplify your eco-friendly routines.",
    },
    Places: {
      description:
        "Discover products that prioritize sustainability and reduce environmental impact.",
    },
    Communities: {
      description:
        "Join vibrant communities and Events dedicated to conscious living",
    },
    "Our Story": {
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
    if (selectedMenu === "Shop" && categoriesStatus === "idle") {
      dispatch(fetchAsyncCategories());
    }
  }, [selectedMenu, categoriesStatus, dispatch]);

  // React.useEffect(() => {
  //   const path = location.pathname;

  //   // Find the active main menu
  //   const activeMain = mainMenus.find(
  //     (menu) => menu.path && path.startsWith(menu.path)
  //   );
  //   if (activeMain) {
  //     setActiveMenu(activeMain.name);

  //     // Find the active submenu if it exists
  //     if (subMenus[activeMain.name]) {
  //       const activeSub = subMenus[activeMain.name].items.find((item) =>
  //         path.startsWith(item.path)
  //       );
  //       if (activeSub) {
  //         setActiveSubMenu(activeSub.path);
  //       } else {
  //         setActiveSubMenu("");
  //       }
  //     } else {
  //       setActiveSubMenu("");
  //     }
  //   } else {
  //     setActiveMenu("");
  //     setActiveSubMenu("");
  //   }
  // }, [location]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#272727" }}>
          <Box>
            <img src={wibhooIcon} alt="wibhooicon" style={{ height: "70px" }} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
            <Search onClick={handleSearchClick}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Find..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Link style={{ color: "white" }} to={"cart"}>
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
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
            <IconButton sx={{ color: "#112121" }} onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Link style={{ color: "white" }} to={"cart"}>
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
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
        open={open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Box display="flex" alignItems="center">
                <SearchIcon />
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  fullWidth
                  sx={{ marginLeft: 1 }}
                />
              </Box>
            </Grid>
            <Grid item xs={2} textAlign="right">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Box mt={4}>
            <Typography variant="h6">Popular</Typography>
            <Box mt={2}>
              {[
                "Home & Living",
                "Fashion & Clothing",
                "Beauty & Care",
                "Eat & Drink",
                "Lifestyle Essentials",
              ].map((item, index) => (
                <Box key={index} display="flex" alignItems="center" mt={1}>
                  <SearchIcon sx={{ marginRight: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      <Drawer
        anchor="right"
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#111917",
            color: "#112121",
            width: { xs: "80%", sm: "80%", md: 500 },
            overflowX: "hidden",
          },
        }}
        onClose={handleDrawerToggle}
      >
        {isMobile ? (
          <Box
            sx={{
              backgroundColor: showSubMenu ? "#12CD7E" : "",
              width: "100%",
              height: "100%",
            }}
          >
            {showSubMenu ? (
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <IconButton onClick={handleBackClick} sx={{ m: 2 }}>
                    <ArrowBackIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{ m: 2 }}
                  >
                    <Close />
                  </IconButton>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: "black", px: 2 }}
                >
                  {/* {subMenus[selectedMenu]?.description} */}
                </Typography>
                <List>
                  {categories?.slice(0, 8).map((item, index) => (
                    <ListItem
                      button
                      key={index}
                      component={Link}
                      to={`category/${item.slug}`}
                      sx={{
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#12CD7E", // Green background on hover
                          color: "#112121", // White text color on hover
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
                        handleMenuItemClick(menu.name);
                        if (menu.path) {
                          setDrawerOpen(false);
                        }
                      }}
                      sx={{
                        textAlign: "center",
                        marginTop: "20px",
                        backgroundColor:
                          selectedMenu === menu.name ? "#12CD7E" : "inherit",
                        color: selectedMenu === menu.name ? "white" : "inherit",
                        "&:hover": {
                          backgroundColor: "#12CD7E",
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
            <Grid item xs={6} sx={{ backgroundColor: "#12CD7E" }}>
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
                      handleMenuItemClick(menu.name);
                      if (menu.path) {
                        setDrawerOpen(false);
                      }
                    }}
                    sx={{
                      textAlign: "center",
                      marginTop: "20px",
                      backgroundColor:
                        selectedMenu === menu.name ? "#12CD7E " : "inherit",
                      color: selectedMenu === menu.name ? "white" : "inherit",
                      "&:hover": {
                        backgroundColor: "#12CD7E",
                        color: "white",
                      },
                    }}
                  >
                    <ListItemText primary={menu.name} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: "#E2F4DD", p: 2 }}>
              {selectedMenu === "Shop" && (
                <>
                  <Typography variant="body2" sx={{ mt: 8, color: "black" }}>
                    {/* {subMenus[selectedMenu]?.description} */}
                  </Typography>
                  <List>
                    {categories?.map((item, index) => (
                      <ListItem
                        button
                        key={index}
                        component={Link}
                        to={`category/${item.slug}`}
                        onClick={() => {
                          setDrawerOpen(false);
                          setShowSubMenu(false);
                        }}
                        sx={{
                          color: "black",
                          "&:hover": {
                            backgroundColor: "#12CD7E", // Green background on hover
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
