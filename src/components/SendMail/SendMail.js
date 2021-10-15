import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import "./SendMail.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase/firebase";

function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: Date.now().toString(),
    });

    //to close the send mail form
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendmail">
      <div className="sendmail_header">
        <h3>New Message</h3>
        <Close
          className="sendmail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("to")} type="email" placeholder="to" required />
        <input
          {...register("subject")}
          type="text"
          placeholder="subject"
          required
        />
        <input
          {...register("message")}
          type="text"
          placeholder="message"
          className="sendmail_message_input"
          required
        />

        <div className="sendmail_option">
          <Button
            className="sendmail_send_btn"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
