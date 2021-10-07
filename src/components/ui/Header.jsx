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
} from "@mui/material";
import { styled } from "@mui/material/styles";

import logo from "../../assets/logo.svg";
import theme from "./Theme";

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
}));

// Styled Logo (with theme)
const StyledLogo = styled("img")(({ theme }) => ({
  height: "8em",
}));

// Styled Tabs (without theme)
const StyledTabs = styled(Tabs)({
  marginLeft: "auto",
});

// Styled Tab (with theme))
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
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

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    // Instructor's comment: If we are trying to access just the '/' Home-page route and we have have not already set the correct value (activeTab)
    // then we we will call setActiveTab() to set with '0' to set the correct active Tab
    if (window.location.pathname === "/" && activeTab !== 0) {
      setActiveTab(0);
    }
    // do the same for all the other pages (seems like there should be a better way, but I'm sticking to the course material for now)
    else if (window.location.pathname === "/services" && activeTab !== 1) {
      setActiveTab(1);
    } else if (window.location.pathname === "/revolution" && activeTab !== 2) {
      setActiveTab(2);
    } else if (window.location.pathname === "/about" && activeTab !== 3) {
      setActiveTab(3);
    } else if (window.location.pathname === "/contact" && activeTab !== 4) {
      setActiveTab(4);
    }
  }, [activeTab]);

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
            <StyledTabs
              value={activeTab}
              onChange={handleTabChange}
              //   indicatorColor="secondary"
              TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
              textColor="inherit"
            >
              <StyledTab component={Link} to="/" label="Home" />
              <StyledTab component={Link} to="/services" label="Services" />
              <StyledTab
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <StyledTab component={Link} to="/about" label="About Us" />
              <StyledTab component={Link} to="/contact" label="Contact Us" />
            </StyledTabs>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                ...theme.typography.estimate,
                borderRadius: "50px",
                marginLeft: "50px",
                marginRight: "25px",
              }}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarSpacer />
    </>
  );
};

export default Header;
