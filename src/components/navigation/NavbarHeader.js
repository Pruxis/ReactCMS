import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Author: Laurens Lavaert
 * Date: 30/05/2017
 * @param logoLink: Link that should be coupled behind the clickable logo. Pressing this will redirect you to that url.
 *  --> Standard reference is to the "/" page, gets overwritten if property is provided.
 * @param logo: Source of the logo image.
 * @param logoAlt: Alternative text that belongs to the logo.
 */

const NavbarHeader = ({ logoLink, logo, logoAlt, ...props }) => {
  return (
    <div className="navbar navbar-inverse" {...props}>
      <div className="navbar-header">
        <Link to={logoLink || "/"} className="navbar-brand">
          <img src={logo} alt={logoAlt} />
        </Link>
        <ul className="nav navbar-nav visible-xs-block">
          <li>
            <a className="sidebar-mobile-main-toggle">
              <i className="icon-paragraph-justify3" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarHeader;

NavbarHeader.propTypes = {
  logoLink: PropTypes.string,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired
};
