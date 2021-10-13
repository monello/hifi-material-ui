import React from "react";
import { Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import cpuImage from "../../assets/Landing-Page-CPU.png";

const LandingPage = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <div>
              Bringing West Coast Technology
              <br /> to the Midwest
            </div>
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
          <Grid item>
            <img alt="Landing Page West Coast Technology" src={cpuImage} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
