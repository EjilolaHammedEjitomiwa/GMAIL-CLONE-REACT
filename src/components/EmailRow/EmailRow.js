import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className="email_row">
      <div className="email_row_option">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>

        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="email_row_title">{title}</h3>

      <div className="email_row_message">
        <h4>
          {subject}{" "}
          <span className="email_row_description">-{description}</span>
        </h4>
      </div>

      <p className="email_row_time">{time}</p>
    </div>
  );
}

export default EmailRow;
