import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "../styles/header.scss";
import logoBlack from "../images/logo-black.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faAddressCard,
  faEnvelope,
  faCamera
} from "@fortawesome/fontawesome-free-solid";

library.add(faBriefcase, faAddressCard, faEnvelope, faCamera);

const ListLink = props => (
  <li style={{ marginRight: `1rem`, marginBottom: `0` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderBottom: `1px solid #dbdbdb`,
      height: `77px`,
      position: `fixed`,
      top: `0`,
      width: `100%`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        alignItems: `center`,
        height: `77px`
      }}
      className="container flex-container space-between"
    >
      <div className="flex-item">
        <div id="logo" className="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          style={{
            backgroundColor: `#262626`,
            display: `inline-block`,
            height: `28px`,
            margin: `0 16px`,
            width: `1px`,
            alignItems: `stretch`,
            border: `0.5px solid #000`
          }}
        ></div>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`
          }}
        >
          <img
            src={logoBlack}
            alt={siteTitle}
            style={{ width: `77px`, margin: `0` }}
          />
        </Link>
      </div>
      <ul className="flex-item">
        <ListLink to="/work/">
          <FontAwesomeIcon icon="briefcase" className="nav-icon"/>
        </ListLink>
        <ListLink to="/about/">
          <FontAwesomeIcon icon="address-card" className="nav-icon"/>
        </ListLink>
        <ListLink to="/contact/">
          <FontAwesomeIcon icon="envelope" className="nav-icon"/>
        </ListLink>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
