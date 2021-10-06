import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";

import logo from "../../assets/logo.svg";

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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarSpacer />
    </>
  );
};

export default Header;
