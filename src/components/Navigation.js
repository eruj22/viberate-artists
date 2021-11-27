import React from "react";
import { useAppContext } from "../context/app_context";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/viberate-color.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

function Navigation() {
  const { allArtists } = useAppContext();

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} className="nav__logo" alt="viberate red logo" />
      </Link>

      <ul className="nav__links">
        {allArtists.map((artist) => {
          const { artist_name, artist_uuid } = artist;

          return (
            <li className="nav__item" key={artist_uuid}>
              <NavLink
                to={`/${artist_uuid}`}
                className={({ isActive }) =>
                  isActive ? "nav--active" : "nav__link"
                }
              >
                {artist_name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="nav__rightMenu">
        <BiSearch className="nav__search" />
        <GiHamburgerMenu className="nav__hamburger" />
      </div>
    </nav>
  );
}

export default Navigation;
