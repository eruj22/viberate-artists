import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/viberate-color.svg";
import burgerMenu from "../assets/burger-menu-white.svg";
import closeMenu from "../assets/close-white.svg";
import search from "../assets/search-white.svg";
import PropTypes from "prop-types";

function Navigation({ allArtists }) {
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

        <img
          src={search}
          alt="search icon"
          className="nav__searchBtn"
          onClick={() => setShowSearch(!showSearch)}
        />

        {isNavOpen ? (
          <img
            src={closeMenu}
            alt="open mobile menu"
            className="nav__hamburger"
            onClick={() => setIsNavOpen(false)}
          />
        ) : (
          <img
            src={burgerMenu}
            alt="open mobile menu"
            className="nav__hamburger"
            onClick={() => setIsNavOpen(true)}
          />
        )}
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  allArtists: PropTypes.array.isRequired,
};

export default Navigation;
