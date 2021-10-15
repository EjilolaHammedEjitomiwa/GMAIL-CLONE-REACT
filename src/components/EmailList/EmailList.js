import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "../Section/Section";
//material icons

import { IconButton, Checkbox } from "@mui/material";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Settings,
} from "@mui/icons-material";
import RedoIcon from "@mui/icons-material/Redo";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailRow from "../EmailRow/EmailRow";
import { db } from "../../firebase/firebase";

function EmailList() {
  const [emails, setEmail] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmail(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div id="emaillist">
      <div className="emaillist_settings">
        <div className="emaillist_settings_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emaillist_settings_right">
          <IconButton>
            <ChevronLeft />
          </IconButton>

          <IconButton>
            <ChevronRight />
          </IconButton>

          <IconButton>
            <KeyboardHide />
          </IconButton>

          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emaillist_section">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section
          Icon={People}
          title="Social"
          color="#1A73E8"
          selected={false}
        />
        <Section
          Icon={LocalOffer}
          title="Promotions"
          color="green"
          selected={false}
        />
      </div>

      <div className="emaillist_list">
        {emails.map(({ id, data: { message, subject, timestamp, to } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
