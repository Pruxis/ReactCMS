import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Author: Laurens Lavaert
 * Date: 30/05/2017
 * @param profile: Profile object of the current user.
 * @param link: Link to the users profile.
 * @param settingsLink: Link to the settings page of the current account.
 */

const UserMenu = ({ profile, link, settingsLink, ...props }) => {
  return (
    <div className="sidebar-user" {...props}>
      <div className="category-content">
        <div className="media">
          <Link to={link || `/user/${profile._id}`} className="media-left">
            <img
              src={profile.image}
              className="img-circle img-sm"
              alt="Profile"
            />
          </Link>
          <div className="media-body">
            <span className="media-heading text-semibold">{profile.name}</span>
            <div className="text-size-mini text-muted">
              <i className="icon-pin text-size-small" />
              {" "}
              &nbsp;
              {profile.location}
            </div>
          </div>
          <div className="media-right media-middle">
            <Link to={settingsLink || "/account/settings/"}>
              <i className="icon-cog3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  profile: PropTypes.object.isRequired,
  link: PropTypes.string,
  settingsLink: PropTypes.string
};
