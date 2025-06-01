import React from "react";
import PropTypes from "prop-types";

const Modal = ({
  children,
  variant = "default",
  shadow = "none",
  className = "",
  ...props
}) => {
  // base styling
  const baseClasses = "rounded-sm border border-gray-200 p-4 shadow-lg";

  // variant styling
  const variantClasses = {
    default: "bg-white",
    primary: "bg-blue-50",
    secondary: "bg-gray-50",
    success: "bg-green-50",
    warning: "bg-yellow-50",
    danger: "bg-red-50",
  };

  // shadow stling
  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  // combine all classes
  const modalClasses = [
    baseClasses,
    variantClasses[variant],
    shadowClasses[shadow],
    className,
  ].join(" ");

  return (
    <div className={modalClasses} {...props}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger"
  ),
  shadow: PropTypes.oneOf("none", "sm", "md", "lg", "xl"),
  className: PropTypes.string,
};

Modal.Header = ({ children, className = "", ...props }) => (
  <div className={`border-b border-gray-200 pb-3 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

Modal.Title = ({ children, className = "", ...props }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

Modal.Body = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export default Modal;
