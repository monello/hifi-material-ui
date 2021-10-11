import React from "react";
import { makeStyles } from "@mui/styles";

import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
  adornement: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("lg")]: {
      width: "21em",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornement}
      />
    </footer>
  );
};

export default Footer;
