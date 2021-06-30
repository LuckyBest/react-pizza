import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
const Button = ({ onClick, outline, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};
export default Button;
