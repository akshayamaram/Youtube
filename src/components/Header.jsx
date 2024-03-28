import React from 'react'
import menu_icon from '../assets/images/menu_icon.png'
import youtube_logo from '../assets/images/youtube_logo.png'
import create_icon from '../assets/images/create_icon.png'
import bell_icon from '../assets/images/bell_icon.png'
import profile_icon from '../assets/images/profile_icon.jpg'
import '../styles/Header.css'
import { SEARCH_ICON } from './utils/constants'


const Header = () => {
  return (
    <div className='header'>
        <div className="h-left">
            <img className='menu-icon' src={menu_icon} alt="menu-icon" />
            <img className='youtube-logo' src={youtube_logo} alt="youtube-logo" />
        </div>
        <div className="h-middle">
            <div className="search">
                <input type="text" placeholder='Search'/>
            </div>
            <button className='search-logo'>{SEARCH_ICON}</button>
        </div>
        <div className="h-right">
            <img src={create_icon} alt="create" className="create-icon" />
            <img src={bell_icon} alt="notification" className="bell-icon" />
            <img src={profile_icon} alt="profile" className="profile-icon" />
        </div>
    </div>
  )
}

export default Header