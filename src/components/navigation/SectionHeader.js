import React from "react";
import PropTypes from "prop-types";

/**
 * Author: Laurens Lavaert
 * Date: 30/05/2017
 * @param {title} title of the navigation section. 
 */

const SectionHeader = ({ title, ...props }) => {
  return (
    <li className="navigation-header">
      <span>{title}</span>
      <i className="icon-menu" title={`${title} pages`} />
    </li>
  );
};

export default SectionHeader;

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired
};
