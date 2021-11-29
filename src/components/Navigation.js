import React, { useState } from "react";
import { useAppContext } from "../context/app_context";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/viberate-color.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

function Navigation() {
  const { allArtists } = useAppContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} className="nav__logo" alt="viberate red logo" />
      </Link>

      <ul className={`nav__links ${isNavOpen ? "nav--open" : ""}`}>
        {allArtists.map((artist) => {
          const { artist_name, artist_uuid } = artist;

          return (
            <li className="nav__item" key={artist_uuid}>
              <NavLink
                to={`/${artist_uuid}`}
                className={({ isActive }) =>
                  isActive ? "nav__link nav--active" : "nav__link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                {artist_name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="nav__rightMenu">
        <input
          type="search"
          className={`nav__search ${showSearch ? "show" : ""}`}
          placeholder="Search artists"
        />
        <BiSearch
          className="nav__searchBtn"
          onClick={() => setShowSearch(!showSearch)}
        />
        <GiHamburgerMenu
          className="nav__hamburger"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>
    </nav>
  );
}

export default Navigation;
