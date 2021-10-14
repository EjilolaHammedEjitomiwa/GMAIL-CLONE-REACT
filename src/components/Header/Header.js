import React from "react";
import "./Header.css";

//material icons
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i2.wp.com/businesspost.ng/wp-content/uploads/2021/09/Gmail.jpg?resize=768%2C432&ssl=1"
          alt=""
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder="search mail" />
        <ArrowDropDown className="header_input_caret" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>
        <IconButton>
          <NotificationsIcon></NotificationsIcon>
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
