import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import VideoCard from "./VideoCard";
import "../styles/VideoCard.css";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="video-container">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {/* {videos.map(video => <VideoCard key={video.id} info={video} />)} */}
    </div>
  );
};

export default VideoContainer;
