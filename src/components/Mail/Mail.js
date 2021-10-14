import {
  ArrowBack,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import "./Mail.css";

function Mail({ subject }) {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_tools_left">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail_tools_right">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail_body">
        <div className="mail_body_header">
          <h2>Subject</h2>
          <LabelImportant className="mail_important" />
          <p>Title</p>
          <p>10pm</p>
        </div>

        <div className="mail_message">This is the message</div>
      </div>
    </div>
  );
}

export default Mail;
