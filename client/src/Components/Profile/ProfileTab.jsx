import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BarkCard from "../BarkCard/BarkCard";

const ProfileTab = () => {
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (event, newValue) => {
    console.log("The tab has changed - ", newValue);
    setTabValue(newValue);
  };
  return (
    <>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="user profile tabs">
            <Tab label="Barks" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {[1, 1, 1, 1, 1].map((item) => (
            <BarkCard />
          ))}
        </TabPanel>
        <TabPanel value="2">Replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </>
  );
};

export default ProfileTab;
