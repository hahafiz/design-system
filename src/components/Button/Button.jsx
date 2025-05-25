import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  // base styling for all buttons
  const baseClasses =
    "inline-flex items-center justify center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  // variant styling
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",
    success: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "bg-transparet hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
  };

  // size styling
  const sizeClasses = {
    xs: "py-1 px-2 text-xs",
    sm: "py-1/5 px-3 text-sm",
    md: "py-2 px-4 text-sm",
    lg: "py-2.5 px-5 text-base",
    xl: "py-3 px-6 text-lg",
  };

  // additional classes styling
  const stateClasses = {
    disabled: "opacity-50 cursor-not-allowed",
    fullWidth: "w-full",
  };

  // combine all classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? stateClasses.disabled : "",
    fullWidth ? stateClasses.fullWidth : "",
    className,
  ].join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="mr-2">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "outline",
    "ghost",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
