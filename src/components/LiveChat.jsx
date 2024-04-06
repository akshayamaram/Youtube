import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/WatchPage.css";
import LiveChatMessage from "./LiveChatMessage";
import { addMessage } from "./utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "./utils/helper";
import { SEND_ICON } from "./utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("pollinh"); /** api polling */

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="live-chat-main-wrapper">
      <div className="live-chat-wrapper">
        {chatMessages.map((c, i) => (
          <LiveChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="live-chat-input"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   dispatch(
        //     addMessage({
        //       name: "Akshaya Maram",
        //       message: liveMessage,
        //     })
        //   );
        //   setLiveMessage("");
        // }}
      >
        <input
          className="live-chat-input-box"
          type="text"
          placeholder="Enter your message"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="live-chat-input-button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Akshaya Maram",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          {SEND_ICON}
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
