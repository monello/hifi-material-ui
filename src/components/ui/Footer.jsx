import React from "react";
import { Link } from "react-router-dom";

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
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em !important",
  },
}));

const Footer = (props) => {
  const { setActiveTab, setSelectedIndex } = props;

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        className={classes.mainContainer}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ display: { lg: "flex", xs: "none" } }}
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/"
              onClick={() => setActiveTab(0)}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/services"
              onClick={() => setActiveTab(1)}
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setActiveTab(1);
                setSelectedIndex(0);
              }}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setActiveTab(1);
                setSelectedIndex(1);
              }}
            >
              Mobile Apps Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/websites"
              onClick={() => {
                setActiveTab(1);
                setSelectedIndex(2);
              }}
            >
              Websites Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setActiveTab(2)}
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setActiveTab(2)}
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setActiveTab(2)}
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setActiveTab(2)}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/about"
              onClick={() => setActiveTab(3)}
            >
              About Us
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/contact"
              onClick={() => setActiveTab(4)}
            >
              Contact Us
            </Grid>
          </Grid>
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
