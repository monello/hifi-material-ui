import React from "react";
import { Grid, Button } from "@mui/material";
import ButtonArrow from "../ui/ButtonArrow";

import cpuImage from "../../assets/Landing-Page-CPU.png";

const LandingPage = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
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
                <Button variant="outlined">
                  Learn More
                  <ButtonArrow width={15} height={15} fill="red"></ButtonArrow>
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
