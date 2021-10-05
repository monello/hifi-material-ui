import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";

function ElevationScroll(props) {
  const { children, window } = props;
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
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>Arc Developement</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
