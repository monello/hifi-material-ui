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

import theme from "./Theme";

const useStyles = makeStyles({
  appbar: {
    zIndex: theme.zIndex.modal + 1 + " !important",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue + " !important",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    fontWeight: "400 !important",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
    fontWeight: 700,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange + " !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
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
  const { activeTab, setActiveTab } = props;
  const { selectedIndex, setSelectedIndex } = props;
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
    {
      name: "Custom Software Developement",
      link: "/customsoftware",
      activeIndex: 1, // index of the parent menu item (Services)
      selectedIndex: 0, // index of this option in the Services dropdown menu
    },
    {
      name: "Mobile Apps Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Websites Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: menuAnchorEl ? "simple-menu" : undefined,
      ariaPopup: menuAnchorEl ? "true" : undefined,
      onMouseOver: (event) => handleMenuCLick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    // Instructor's comment: If we are trying to access just the '/' Home-page route and we have have not already set the correct value (activeTab)
    // then we we will call setActiveTab() to set with '0' to set the correct active Tab
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case route.link:
          // if the activeTab (as set by the onClick events) does not match the activeIndex (active parent menu)
          if (activeTab !== route.activeIndex) {
            setActiveTab(route.activeIndex);
            // if this has a selectedIndex, then we know it's a sub-menu item of the Services dropdown menu
            // if the index of this item, does not match the current selectedIndex (as set by the onClick events)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [activeTab, selectedIndex, menuOptions, routes]);

  const tabs = (
    <>
      <StyledTabs
        value={activeTab}
        onChange={handleTabChange}
        //   indicatorColor="secondary"
        TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
        textColor="inherit"
      >
        {routes.map((route, index) => (
          <StyledTab
            key={`${route}${index}`}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </StyledTabs>
      <Button
        component={Link}
        to="/estimate"
        onClick={() => setActiveTab(5)}
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
        keepMounted
        style={{ zIndex: 1302 }}
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
        // classes={{ paper: classes.drawer }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.common.blue,
          },
        }}
      >
        <ToolbarSpacer />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={activeTab === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setDrawerIsOpen(false);
                setActiveTab(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setDrawerIsOpen(false);
              setActiveTab(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={activeTab === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
          >
            <ListItemText
              className={classes.drawerItem}
              sx={{
                ...theme.typography.estimate,
                color: theme.palette.common.black,
                "&:hover": {
                  color: theme.palette.common.white + " !important",
                },
              }}
              disableTypography
            >
              Free Estimate
            </ListItemText>
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
        <AppBar position="fixed" className={classes.appbar}>
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
