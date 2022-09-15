import React from "react";
import Nav from "./nav.js";

import "../styles/header-footer.scss";
import Profile from "../images/profile.jpg";
import Resume from "../resume.pdf";

const Header = () => (
  <header>
    <div className="profile">
      <div className="profile-img">
        <img src={Profile} alt="Profile" />
      </div>
      <div className="profile-info">
        <h1 id="name">Crystal Rhee</h1>
        <p>Frontend Engineer & Web Application Developer</p>
        <p>Based in Boston</p>
        <div class="social">
          <span>
            <i className="fa fa-facebook inactive"></i>
          </span>
          <span>
            <i className="fa fa-twitter inactive"></i>
          </span>
          <a href="https://www.linkedin.com/in/crystalrhee" target="_blank">
            <i className="fa fa-linkedin active"></i>
          </a>
          <a href="https://www.github.com/crystalrhee" target="_blank">
            <i className="fa fa-github active"></i>
          </a>
          <a href="https://www.codepen.io/crystalrhee" target="_blank">
            <i className="fa fa-codepen active"></i>
          </a>
        </div>
        <a href={Resume} target="_blank" className="button">Resume</a>
      </div>
    </div>
    <Nav/>
  </header>
);

export default Header;
