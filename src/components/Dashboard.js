import React, { Component } from "react";

import NavbarHeader from "./navigation/NavbarHeader";

/* Importing theme styles */
import "../assets/css/icons/icomoon/styles.css";
import "../assets/css/bootstrap.css";
import "../assets/css/core.css";
import "../assets/css/components.css";
import "../assets/css/colors.css";

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

class Dashboard extends Component {
  render() {
    return <NavbarHeader />;
  }
}

export default Dashboard;
