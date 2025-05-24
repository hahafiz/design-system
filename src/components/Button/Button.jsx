import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  // base styling for all buttons
  const baseClasses =
    "inline-flex items-center justify center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  // variant styling
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",
  };

  // size styling
  const sizeClasses = {
    xs: "py-1 px-2 text-xs",
    sm: "py-1/5 px-3 text-sm",
    md: "py-2 px-4 text-sm",
    lg: "py-2.5 px-5 text-base",
    xl: "py-3 px-6 text-lg",
  };

  // combine classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
  ].join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default Button;
