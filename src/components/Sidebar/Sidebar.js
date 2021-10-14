import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="sidebar_compose"
        fontSize="large"
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />

      <SidebarOption
        Icon={StarIcon}
        title="Starred"
        number={12}
        selected={false}
      />

      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={2}
        selected={false}
      />

      <SidebarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={20}
        selected={false}
      />

      <SidebarOption
        Icon={NearMeIcon}
        title="Sent"
        number={90}
        selected={false}
      />

      <SidebarOption
        Icon={NoteIcon}
        title="Drafts"
        number={34}
        selected={false}
      />

      <SidebarOption
        Icon={ExpandMoreIcon}
        title="More"
        number={34}
        selected={false}
      />

      <div className="sidebar_footer">
        <div className="sidebar_footer_icons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
