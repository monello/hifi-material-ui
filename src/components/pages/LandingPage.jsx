import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import cpuImage from "../../assets/Landing-Page-CPU.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em !important",
    minWidth: "21em !important",
    marginTop: "2em !important",
    marginLeft: "10% !important",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item sm>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br /> to the Midwest
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon color="error" />}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <img alt="Landing Page West Coast Technology" src={cpuImage} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
