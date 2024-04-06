import React from "react";
import "../styles/WatchPage.css";
import { useParams, useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import '../styles/Comments.css';
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  return (
    <div className="watchpage-wrapper">
      <div className="watchpage">
        <div className="videoIframe">
          <iframe
            width="660"
            height="420"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="comments-container">
          <Comments />
        </div>
      </div>
      <div className="live-chat-container">
        <LiveChat/>
      </div>
    </div>
  );
};

export default WatchPage;
