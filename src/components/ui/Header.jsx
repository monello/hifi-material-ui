import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Menu as MenuIcon } from "@mui/icons-material";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles({
  drawerIconContainer: {
    marginLeft: "auto !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  drawerIcon: {
    height: "50px !important",
    width: "50px !important",
    color: "white !important",
  },
});

/**
 * ## STYLED COMPONENTS
 *
 * ### Styling with the theme
 * const StyledComponent = styled( Component, [options] )( ({theme}) => ({styles}) ) )
 *
 * ### Styling without the theme
 * const StyledComponent = styled( Component, [options] )( {styles} )
 *
 */

// Toolbar Spacer (with theme) - Styling a Vanilla `<div>` element
const ToolbarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em", // to compensate for the logo height
  [theme.breakpoints.down("lg")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1em",
  },
}));

// Styled Logo (with theme)
const StyledLogo = styled("img")(({ theme }) => ({
  height: "8em",
  "&:hover": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("lg")]: {
    height: "7em",
  },
  [theme.breakpoints.down("sm")]: {
    height: "5.5em",
  },
}));

// Styled Tabs (without theme)
const StyledTabs = styled(Tabs)({
  marginLeft: "auto",
});

// Styled Tab (with theme))
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "10px",
}));

/* FUNCTIONS */
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const theme = useTheme();
  const classes = useStyles(props);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const lgBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuCLick = (event) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuIsOpen(true);
  };

  const handleMenuClose = (event) => {
    setMenuAnchorEl(null);
    setMenuIsOpen(false);
  };

  const handleMenuItemClick = (event, index) => {
    setMenuAnchorEl(null);
    setMenuIsOpen(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    { name: "Custom Software Developement", link: "/customsoftware" },
    { name: "Mobile Apps Development", link: "/mobileapps" },
    { name: "Websites Development", link: "/websites" },
  ];

  useEffect(() => {
    // Instructor's comment: If we are trying to access just the '/' Home-page route and we have have not already set the correct value (activeTab)
    // then we we will call setActiveTab() to set with '0' to set the correct active Tab
    switch (window.location.pathname) {
      case "/":
        if (activeTab !== 0) {
          setActiveTab(0);
        }
        break;
      case "/services":
        if (activeTab !== 1) {
          setActiveTab(1);
        }
        break;
      case "/customsoftware":
        if (activeTab !== 1) {
          setActiveTab(1);
          setSelectedIndex(0);
        }
        break;
      case "/mobileapps":
        if (activeTab !== 1) {
          setActiveTab(1);
          setSelectedIndex(1);
        }
        break;
      case "/websites":
        if (activeTab !== 1) {
          setActiveTab(1);
          setSelectedIndex(2);
        }
        break;
      case "/revolution":
        if (activeTab !== 2) {
          setActiveTab(2);
        }
        break;
      case "/about":
        if (activeTab !== 3) {
          setActiveTab(3);
        }
        break;
      case "/contact":
        if (activeTab !== 4) {
          setActiveTab(4);
        }
        break;
      case "/estimate":
        if (activeTab !== 5) {
          setActiveTab(5);
        }
        break;
      default:
        break;
    }
  }, [activeTab]);

  const tabs = (
    <>
      <StyledTabs
        value={activeTab}
        onChange={handleTabChange}
        //   indicatorColor="secondary"
        TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
        textColor="inherit"
      >
        <StyledTab component={Link} to="/" label="Home" />
        <StyledTab
          component={Link}
          to="/services"
          label="Services"
          aria-owns={menuAnchorEl ? "simple-menu" : undefined}
          aria-haspopup={menuAnchorEl ? "true" : undefined}
          onMouseOver={(event) => handleMenuCLick(event)}
        />
        <StyledTab component={Link} to="/revolution" label="The Revolution" />
        <StyledTab component={Link} to="/about" label="About Us" />
        <StyledTab component={Link} to="/contact" label="Contact Us" />
      </StyledTabs>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          ...theme.typography.estimate,
          borderRadius: "50px",
          marginLeft: "20px",
          marginRight: "25px",
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={menuAnchorEl}
        open={menuIsOpen}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.common.blue,
            color: theme.palette.primary.contrastText,
            borderRadius: 0,
          },
        }}
        elevation={0}
      >
        {menuOptions.map((menuItem, index) => (
          <MenuItem
            key={index}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleMenuClose();
              setActiveTab(1);
            }}
            selected={index === selectedIndex && activeTab === 1}
            component={Link}
            to={menuItem.link}
            sx={{
              ...theme.typography.tab,
              opacity: 0.7,
              "&:hover": { opacity: 1 },
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
        onOpen={() => setDrawerIsOpen(true)}
      >
        <List>
          <ListItem component={Link} to="/">
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/services">
            <ListItemText>Services</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/revolution">
            <ListItemText>The Revolution</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/contact">
            <ListItemText>Contact</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/about">
            <ListItemText>About</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setDrawerIsOpen(!drawerIsOpen)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              sx={{ padding: 0 }}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              <StyledLogo src={logo} alt="Company Logo" />
            </Button>
            {lgBreakpoint ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarSpacer />
    </>
  );
};

export default Header;
