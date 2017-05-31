import React from "react";
import PropTypes from "prop-types";
import classNames from "./classNames";

const Panel = ({
  white,
  primary,
  success,
  danger,
  info,
  warning,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "panel",
        white && "panel-white",
        primary && "panel-primary",
        success && "panel-success",
        danger && "panel-danger",
        info && "panel-info",
        warning && "panel-warning")
      )}
    >
      {children}
    </div>
  );
};

Panel.propTypes = {
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool
};
