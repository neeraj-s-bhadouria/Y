import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button } from "@mui/material";
import userIcon from "../../static/images/user_icon.png";
import { useNavigate } from "react-router-dom";
import verifiedY from "../../static/images/verified_y.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BarkCard = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUnbark = () => {
    console.log("Unbarking because you only bark no bite...");
    setAnchorEl(null);
  };

  const handleOpenReplyModel = () => {
    console.log("Let's Bite this mf...");
  };

  const handleClickRebark = () => {
    console.log("ReBarking someone else's bark");
  };

  const handleLikeBark = () => {
    console.log("Like/Unlike other's bark");
  };

  return (
    <div>
      <div className="flex item-center font-semibold text-gray-700 py-2">
        <RepeatIcon className="text-[#1d9bf0]" />
        <p>You barked again</p>
      </div>
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="userIcon"
          src={userIcon}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer item-center space-x-2">
              <span className="font-semibold">Maulana Neeraj</span>

              <span className="text-gray-600">@maulana-neeraj .2m ago</span>
              {/*<img
                className="ml-2 w-5 h-5"
                alt="verifiedIcon"
                src={verifiedY}
  />*/}
              <VerifiedIcon alt="verifiedIcon" className="text-[#1d9bf0]" />
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreHorizIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleUnbark}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleUnbark}>UnBark</MenuItem>
                  <MenuItem onClick={handleUnbark}>Edit</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="cursor-pointer">
              <p className="mb-2 p-0">
                It is Y, not an X clone. Nope, absolutely not.
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src={userIcon}
                alt="feed post"
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>72</p>
              </div>
              <div
                className={`${
                  true ? "text-[#1d9bf0]" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleClickRebark}
                />
                <p>69</p>
              </div>
              <div
                className={`${
                  true ? "text-[#1d9bf0]" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLikeBark}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="cursor-pointer"
                    onClic={handleLikeBark}
                  />
                )}
                <p>72</p>
              </div>
              <div className="space-x-3 flex items-center">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>69</p>
              </div>
              <div className="space-x-3 flex items-center">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarkCard;
