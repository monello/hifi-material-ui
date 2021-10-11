import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return <footer className={classes.footer}>Example Footer</footer>;
};

export default Footer;
