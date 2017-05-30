import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

/**
 * Author: Laurens Lavaert
 * Date: 30/05/2017
 * @param {title} caption of the link 
 * @param {dropdown} boolean wether or not the component is a dropdown of multiple links
 * @param {link} string that references where the link should point to.
 * @param {icon} string that defines which icon to use for this link.
 * @param {children} NavigationLink components nested inside creating a dropdown effect.
 */

const NavigationLink = ({
  title,
  dropdown,
  link,
  icon,
  children,
  ...props
}) => {
  return (
    <li {...props}>
      <NavLink activeClassName="active" to={link}>
        <i className={icon} />
        <span>title</span>
      </NavLink>
      {dropdown && children}
    </li>
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  dropdown: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
