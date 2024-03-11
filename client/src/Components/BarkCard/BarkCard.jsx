import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button } from "@mui/material";
import userIcon from "../../static/images/user_icon.png";
import { useNavigate } from "react-router-dom";
import verifiedY from "../../static/images/verified_y.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
              <span className="font-semibold">Maulana Neeraj-bin-yaddasht</span>

              <span className="text-gray-600">
                @maulana-neeraj-bin-yaddasht .2m
              </span>
              <img
                className="ml-2 w-5 h-5"
                alt="verifiedIcon"
                src={verifiedY}
              />
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
        </div>
      </div>
    </div>
  );
};

export default BarkCard;
