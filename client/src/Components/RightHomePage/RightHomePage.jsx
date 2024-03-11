import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RightHomePage = () => {
  const handleChangeTheme = () => {
    console.log("Changing theme");
  };
  return (
    <div className="py-5 sticky top-0">
      <div className="relative flex items-center">
        <input
          className="py-3 rounded-full text-gray-500 w-full pl-12"
          type="text"
          placeholder="Bismillah ud rehman ud rahim"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness4Icon
          onClick={handleChangeTheme}
          className="ml-3 cursor-pointer"
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new feature</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's happening</h1>
        <div>
          <p className="text-sm">Khatna ceremony</p>
          <p className="font-bold">Rahul Gandhi ka khatna</p>
        </div>
        {[1, 1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p>Entertainment . Trending</p>
              <p className="font-bold">Kejriwal's Launda dance</p>
              <p>69.72k Rebarks</p>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </section>
    </div>
  );
};

export default RightHomePage;
