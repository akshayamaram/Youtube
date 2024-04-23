import React, { useEffect, useState } from "react";
import menu_icon from "../assets/images/menu_icon.png";
import youtube_logo from "../assets/images/youtube_logo.png";
import create_icon from "../assets/images/create_icon.png";
import bell_icon from "../assets/images/bell_icon.png";
import profile_icon from "../assets/images/profile_icon.jpg";
import "../styles/Header.css";
import {
  SEARCH_ICON,
  SMALL_SEARCH_ICON,
  YOUTUBE_SEARCH_API,
} from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
// import { toggleSidebar } from "./utils/sidebarSlice";
import { cacheResults } from "./utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    /* 
    * Implementing Debouncing
    TODO: make an api call for every key press, but if the difference b/w 2 api calls is <200ms - DECLINE CALL 
    */

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);

    const url = YOUTUBE_SEARCH_API + searchQuery;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch search suggestions");
      }
      const data = await response.json(); // declare the data variable here
      // console.log(data[1]);
      setSuggestions(data[1]);

      /** update  cache */
      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        })
      );
    } catch (error) {
      alert("please install cors extension and enable it to test search suggestions feature, will fix it soon...");
      console.error(error);
    }
  };

  // const toggleSidebarHandler = () => {
  //   dispatch(toggleSidebar());
  // };

  /**
   * * I intentionally not using those dispatch because i dont want to include
   * * that sidebar toggle functionality (i just liked it normally so.. personal preference xd)
   * * but just kept the code there for reference (for if i wanted to change it in future)
   */

  return (
    <div className="header">
      <div className="h-left">
        {/* <img onClick={() => toggleSidebarHandler()} className='menu-icon' src={menu_icon} alt="menu-icon" /> */}
        <img className="menu-icon" src={menu_icon} alt="menu-icon" />
        <img className="youtube-logo" src={youtube_logo} alt="youtube-logo" />
      </div>

      <div className="h-middle">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
        </div>
        <button className="search-logo">{SEARCH_ICON}</button>
        {showSuggestions && (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => (
              <div className="suggestion" key={index}>
                <div className="small-search-icon">{SMALL_SEARCH_ICON}</div>
                <div className="suggest-text">{suggestion}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-right">
        <img src={create_icon} alt="create" className="create-icon" />
        <img src={bell_icon} alt="notification" className="bell-icon" />
        <img src={profile_icon} alt="profile" className="profile-icon" />
      </div>
    </div>
  );
};

export default Header;
