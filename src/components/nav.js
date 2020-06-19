import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Nav = () => (
    <nav>
      <ul>
        <li>
          <Link to="/portfolio">About</Link>
        </li>
        <li>
          <Link to="/portfolio/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/portfolio/career">Career</Link>
        </li>
        <li>
          <Link to="/portfolio/projects">Projects</Link>
        </li>
        <li>
          <Link to="/portfolio/contact">Contact</Link>
        </li>
      </ul>
    </nav>
);

export default Nav;
