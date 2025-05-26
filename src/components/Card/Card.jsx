import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, variant = "default", padding = "md", ...props }) => {
  // base styling
  const baseClasses = "rounded-lg overflow-hidden";

  // variant styling
  const variantClasses = {
    default: "bg-white",
    primary: "bg-blue-50",
  };

  // padding styling
  const paddingClasses = {
    none: "",
    sm: "p-2",
    md: "p-4",
  };

  // combine all classes
  const cardClasses = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
  ].join(" ");

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

// prop validation
Card.PropTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "primary"]),
  padding: PropTypes.oneOf(["none", "sm", "md"]),
};

export default Card;
