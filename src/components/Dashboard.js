import React, { Component } from "react";

import NavbarHeader from "./navigation/NavbarHeader";
import SectionHeader from "./navigation/SectionHeader";
import Sidebar from "./navigation/Sidebar";
import UserMenu from "./navigation/UserMenu";
import NavigationLink from "./navigation/NavigationLink";

import image from "../assets/images/logo_icon_dark.png";

/* Importing theme styles */
import "../assets/css/icons/icomoon/styles.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/core.min.css";
import "../assets/css/components.min.css";
import "../assets/css/colors.min.css";

/* Dumb wrapper component that wraps the content inside a page-container*/
const Container = ({ children }) => {
  return (
    <div className="page-container">
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

/* Dumb wrapper component for content. */
const ContentWrapper = ({ header, children }) => {
  return (
    <div className="content-wrapper">
      {header}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <NavbarHeader logo={image} logoAlt="logo" logoLink="/" />
        <Container>
          <Sidebar
            userMenu={
              <UserMenu
                profile={{
                  image: image,
                  name: "React CMS",
                  location: "Somewhere, BE"
                }}
              />
            }
          >
            <SectionHeader title="Main" />
            <NavigationLink title="Dashboard" to="/" icon="icon-home4" />
            <NavigationLink title="Pages" to="/admin" icon="icon-copy" />
            <SectionHeader title="Some other header" />
          </Sidebar>
          <ContentWrapper />
        </Container>
      </div>
    );
  }
}

export default Dashboard;
