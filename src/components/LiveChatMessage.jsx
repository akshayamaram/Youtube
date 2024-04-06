import React from "react";
import user_icon from "../assets/images/user_icon.png";
import "../styles/WatchPage.css";

const LiveChatMessage = ({ name, message }) => {

  return (
    <div className="live-chat-message-container">
      <img className="lc-user-icon" src={user_icon} alt="" />
      <span className="lc-username">{name}</span>
      <span className="lc-message">{message}</span>
    </div>
  );
};

export default LiveChatMessage;
