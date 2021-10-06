import React from "react";
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
  height: "7em",
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
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <StyledLogo src={logo} alt="Company Logo" />
            <StyledTabs textColor="inherit">
              <StyledTab label="Home" />
              <StyledTab label="Services" />
              <StyledTab label="The Revolution" />
              <StyledTab label="About Us" />
              <StyledTab label="Contact Us" />
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
