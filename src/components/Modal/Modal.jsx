import React from "react";
import PropTypes from "prop-types";

const Modal = ({ children, ...props }) => {
  // base styling
  const baseClasses = "rounded-sm border border-gray-200 p-4 shadow-lg";

  // combine all classes
  const cardClasses = [baseClasses].join(" ");

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
