import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation.jsx";
import Feeds from "../Feeds/Feeds.jsx";

const Homepage = () => {
  return (
    <div>
      <Grid container item xs={12} className="px-5 lg:px-36 justify-between">
        {/* left column */}
        <Grid item xs={0} lg={2.5} className=" lg:block w-full relative">
          <Navigation />
        </Grid>

        {/* middle column */}
        <Grid item xs={12} lg={6} className=" lg:block w-full relative">
          <Feeds />
        </Grid>

        {/* right column */}
        <Grid item xs={0} lg={3.5} className="hidden lg:block w-full relative">
          <p className="text-center">Right part</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
