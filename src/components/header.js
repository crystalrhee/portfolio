import React from "react";
import Nav from "./nav.js";
import "../styles/header-footer.scss";
import profile from "../images/profile.jpg";

const Header = () => (
  <header>
    <div className="profile">
      <div className="profile-img">
        <img src={profile} alt="Profile" />
      </div>
      <div className="profile-info">
        <h1 id="name">Crystal Rhee</h1>
        <p>Frontend Engineer & Web Application Developer</p>
        <p>based in Boston</p>
        <div>
          <a href="#">
            <i className="fa fa-facebook inactive"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter inactive"></i>
          </a>
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
      </div>
    </div>
    <Nav/>
  </header>
);

export default Header;
