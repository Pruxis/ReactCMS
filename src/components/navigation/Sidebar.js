import React from "react";
import PropTypes from "prop-types";

/**
 * Author: Laurens Lavaert
 * Date: 30/05/2017
 * @param {userMenu} is a component that represents the usermenu 
 * @param {children} are the components that represent the navigation groups and links
 */

const Sidebar = ({ children, userMenu, ...props }) => {
  return (
    <div className="sidebar sidebar-main" {...props}>
      <div className="sidebar-content">
        {userMenu}
        <div className="sidebar-category sidebar-category-visible">
          <div className="category-content no-padding">
            <ul className="navigation navigation-main navigation-accordion">
              {children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  userMenu: PropTypes.node.isRequired
};
