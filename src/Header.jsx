import React from "react";
import "./styles/index.css";
import { NavLink } from "react-router-dom";

function MainHeader() {
  const styledLink = {
    textDecoration: "none",
  };

  return (
    <div className="mainHeaderContainer">
      <nav className="nav">
        <div className="nav-container">
          <ul>
            <NavLink
              exact
              to="/"
              className="navLinks"
              activeClassName="main-nav-active"
              style={styledLink}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/tours"
              className="navLinks"
              activeClassName="main-nav-active"
              style={styledLink}
            >
              Tours
            </NavLink>
            <NavLink
              exact
              to="/custom_tours"
              className="navLinks"
              activeClassName="main-nav-active"
              style={styledLink}
            >
              Custom-Tour
            </NavLink>
            <NavLink
              exact
              to="/blog"
              className="navLinks"
              activeClassName="main-nav-active"
              style={styledLink}
            >
              Blog
            </NavLink>

            <NavLink
              exact
              to="/travel_tips"
              className="navLinks"
              activeClassName="main-nav-active"
              style={styledLink}
            >
              Travel-Tips
            </NavLink>
          </ul>
        </div>
        {/* <h1>
          <img src={logo} alt="Logo" />
        </h1> */}
      </nav>
    </div>
  );
}

export default MainHeader;
