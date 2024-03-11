import React from "react";
import transparent_logo from "../../static/images/transparent_logo.png";
import { navigation } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import userIcon from "../../static/images/user_icon.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img src={transparent_logo} alt="logo" width="70px" height="70px" />
        </div>
        {/* Vertical Navigation Links */}
        <div className="space-y-6">
          {navigation.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
              key={item.id}
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        {/* Button to Bark */}
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Bark
          </Button>
        </div>
        {/* Profile Details Display */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Profile Picture Display */}
            <Avatar alt="userIcon" src={userIcon} />
            {/* User Handle Display */}
            <div>
              <span>Maulana Neeraj</span>
              <br />
              <span className="opacity-70">@maulana-neeraj</span>
            </div>

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
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
