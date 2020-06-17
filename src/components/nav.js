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
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
);

export default Nav;
