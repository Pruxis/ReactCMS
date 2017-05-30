import React from "react";
import PropTypes from "prop-types";

import { Route, Link } from "react-router-dom";

/**
 * Author: Laurens Lavaert
 * Date: 30/05/2017
 * @param {to} string of the route that the link should point to.
 * @param {exact} When true, the active class/style will only be applied if the location is matched exactly.
 * @param {icon} String of the icon to use.
 * @param {title} String of the title to be displayed on the link.
 * @param {dropdown} Boolean to allow dropdowns.
 * @param {children} NavigationLink child components to initialise dropdown.
 */

const NavigationLink = ({
  to,
  exact,
  icon,
  title,
  dropdown,
  children,
  ...props
}) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <li className={match && "active"}>
          <Link to={to}>
            <i className={icon} />
            <span>{title}</span>
          </Link>
          {dropdown && children}
        </li>
      )}
    />
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dropdown: PropTypes.bool
};
