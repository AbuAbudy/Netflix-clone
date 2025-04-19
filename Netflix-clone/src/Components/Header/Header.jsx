import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Header.css";
import logo from "../../Asssets/images/netflix-logo.webp";

function Header() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-outer-container ${showBackground ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={logo} alt="Netflix-Logo" width={100} /></li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>
              <span className="responsive-text">
                Browse <span className="hide-on-small">by language</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li style={{ marginRight: "10px" }}><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
