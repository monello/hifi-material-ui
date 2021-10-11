import React from "react";
import { makeStyles } from "@mui/styles";

import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img alt="black decorative slash" src={footerAdornment} />
    </footer>
  );
};

export default Footer;
