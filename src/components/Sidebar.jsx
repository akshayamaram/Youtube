import React from 'react'
import { HOME_ICON, SHORTS_ICON, SUBSCRIPTIONS_ICON, YOUR_CHANNEL_ICON, HISTORY_ICON, PLAYLIST_ICON, YOUR_VIDEOS_ICON, WATCH_LATER_ICON, LIKED_VIDEOS_ICON   } from './utils/constants'
import '../styles/Sidebar.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen)

  /** this is called EARLY RETURN PATTERN */
  if(!isSidebarOpen) return null;

  return (
    <div className="sidebar">
      <ul>
        <li><a href="/home" className=""><span className="img">{HOME_ICON}</span> Home</a></li>
        <li><a href="/shorts"><span className="img">{SHORTS_ICON}</span> Shorts</a></li>
        <li><a href="/subscriptions"><span className="img">{SUBSCRIPTIONS_ICON}</span> Subscriptions</a></li>        
        <li><hr /></li>
        <li className="you">You <span className="arrow">˃</span></li>
        <li><a href="/yourchannel"><span className="img">{YOUR_CHANNEL_ICON}</span> Your channel</a></li>
        <li><a href="/history"><span className="img">{HISTORY_ICON}</span> History</a></li>
        <li><a href="/playlists"><span className="img">{PLAYLIST_ICON}</span> Playlists</a></li>
        <li><a href="/yourvideos"><span className="img">{YOUR_VIDEOS_ICON}</span> Your videos</a></li>
        <li><a href="/watchlater"><span className="img">{WATCH_LATER_ICON}</span> Watch Later</a></li>
        <li><a href="/likedvideos"><span className="img">{LIKED_VIDEOS_ICON}</span> Liked videos</a></li>
      </ul>
    </div>
  );
}

export default Sidebar
