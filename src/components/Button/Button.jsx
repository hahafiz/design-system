import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 rounded-md text-white"
      {...props}
    >
      Buttons
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
};

export default Button;
