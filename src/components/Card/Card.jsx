import React from "react";
import PropTypes from "prop-types";

const Card = ({
  children,
  variant = "default",
  padding = "md",
  shadow = "md",
  bordered = false,
  className = "",
  ...props
}) => {
  // base styling
  const baseClasses = "rounded-lg overflow-hidden";

  // variant styling
  const variantClasses = {
    default: "bg-white",
    primary: "bg-blue-50",
    secondary: "bg-gray-50",
    success: "bg-green-50",
    warning: "bg-yellow-50",
    danger: "bg-red-50",
  };

  // padding styling
  const paddingClasses = {
    none: "",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  };

  // shadow styling
  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-md",
    xl: "shadow-xl",
  };

  // border styling
  const borderClasses = bordered ? "border border-gray-200" : "";

  // combine all classes
  const cardClasses = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    shadowClasses[shadow],
    borderClasses,
    className,
  ].join(" ");

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

// compound components
Card.Header = ({ children, className = "", ...props }) => (
  <div className={`border-b border-gray-200 pb-3 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className = "", ...props }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

Card.Body = ({ children }) => <div className="p-4">{children}</div>;
Card.Footer = ({ children }) => <div className="p-4">{children}</div>;

// prop validation
Card.PropTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "primary"]),
  padding: PropTypes.oneOf(["none", "sm", "md"]),
  shadow: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

Card.Header.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
