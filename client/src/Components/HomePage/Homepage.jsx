import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation.jsx";
import Feeds from "../Feeds/Feeds.jsx";
import RightHomePage from "../RightHomePage/RightHomePage.jsx";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import BarkDetails from "../BarkDetails/BarkDetails.jsx";

const Homepage = () => {
  return (
    <div>
      <Grid container item xs={12} className="px-5 lg:px-36 justify-between">
        {/* left column */}
        <Grid item xs={0} lg={2.5} className=" lg:block w-full relative">
          <Navigation />
        </Grid>

        {/* middle column */}
        <Grid
          item
          xs={12}
          lg={6}
          className="px-5 lg:px-9 lg:block w-full relative"
        >
          <Routes>
            <Route path="/" element={<Feeds />} />
            <Route path="/profile/:profileId" element={<Profile />} />
            <Route path="/bark/:barkId" element={<BarkDetails />} />
          </Routes>
        </Grid>

        {/* right column */}
        <Grid item xs={0} lg={3.5} className="hidden lg:block w-full relative">
          <RightHomePage />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
