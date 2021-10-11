import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornement: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("lg")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        className={classes.mainContainer}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item className={classes.link}>
          Hone
        </Grid>
      </Grid>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornement}
      />
    </footer>
  );
};

export default Footer;
