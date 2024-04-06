import React from "react";
import "../styles/VideoCard.css";

const VideoCard = ({ info }) => {
  //   console.log(info);

  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="video-card">
      <img
        className="thumbnail-img"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <h3 className="video-title">{title}</h3>
      <h4 className="channel-title">{channelTitle}</h4>
      <h4 className="video-details">
        <span className="view-count">{statistics.viewCount} views</span>
      </h4>
    </div>
  );
};

export default VideoCard;
