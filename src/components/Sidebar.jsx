import React from 'react'
import { HOME_ICON, SHORTS_ICON, SUBSCRIPTIONS_ICON, YOUR_CHANNEL_ICON, HISTORY_ICON, PLAYLIST_ICON, YOUR_VIDEOS_ICON, WATCH_LATER_ICON, LIKED_VIDEOS_ICON , SETTINGS_ICON } from './utils/constants'
import '../styles/Sidebar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isSidebarOpen = useSelector((store) => store.sidebar.isSidebarOpen)

  /** this is called EARLY RETURN PATTERN */
  if(!isSidebarOpen) return null;

  return (
    <div className="sidebar">
      <ul>
        <li><Link to={"/"} className=""><span className="img">{HOME_ICON}</span> Home</Link></li>
        <li><Link to={"/shorts"}><span className="img">{SHORTS_ICON}</span> Shorts</Link></li>
        <li><Link to={"/subscriptions"}><span className="img">{SUBSCRIPTIONS_ICON}</span> Subscriptions</Link></li>        
        <li><hr /></li>
        <li className="you">You <span className="arrow"></span></li>
        <li><Link to={"/yourchannel"}><span className="img">{YOUR_CHANNEL_ICON}</span> Your channel</Link></li>
        <li><Link to={"/history"}><span className="img">{HISTORY_ICON}</span> History</Link></li>
        <li><Link to={"/playlists"}><span className="img">{PLAYLIST_ICON}</span> Playlists</Link></li>
        <li><Link to={"/yourvideos"}><span className="img">{YOUR_VIDEOS_ICON}</span> Your videos</Link></li>
        <li><Link to={"/watchlater"}><span className="img">{WATCH_LATER_ICON}</span> Watch Later</Link></li>
        <li><Link to={"/likedvideos"}><span className="img">{LIKED_VIDEOS_ICON}</span> Liked videos</Link></li>
        <li><hr /></li>
        <li className="you">Explore <span className="arrow"></span></li>
        <li><Link to={"/settings"}><span className="img">{SETTINGS_ICON}</span> Settings</Link></li>

      </ul>
    </div>
  );
}

export default Sidebar
