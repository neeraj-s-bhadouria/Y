import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import userIcon from "../../static/images/user_icon.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ProfileTab from "./ProfileTab.jsx";
import EditProfileModal from "./EditProfileModal";

const Profile = () => {
  const naviagte = useNavigate();

  const handleBack = () => naviagte(-1);

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleEditProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const handleFollowUser = () => {
    console.log("Follow/Unfollow user");
  };
  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Maulana Neeraj
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2020/07/15/13/56/birds-5407779_1280.jpg"
          alt="profile banner"
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="user handle"
            src={userIcon}
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {/* If User's own profile then show edit profile button else show follow/unfollow user button */}
          {true ? (
            <Button
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
              onClick={handleEditProfileModel}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
              onClick={handleFollowUser}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Maulana Neeraj</h1>
            &nbsp;
            {true && (
              <VerifiedIcon alt="verifiedIcon" className="text-[#1d9bf0]" />
            )}
          </div>
          <h1 className="text-gray-500">@maulana-neeraj</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Hello, My Name is Maulana Neeraj-bin-yaddasht. I am on a Maqsad to
            spread the power of Islam. I am the one who explained the Islam to
            Mohammed - the last prophet as I am the first Prophet. <br />
            "Maqsad mat Bhoolna."
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Madarasa</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Macca/Madina</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined March 2024</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>69k</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>72k</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <ProfileTab />
      </section>
      <section>
        <EditProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
};

export default Profile;
