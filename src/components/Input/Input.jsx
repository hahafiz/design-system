import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  id = "",
  name = "",
  placeholder = "Input",
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  // base styling
  const baseClasses = "p-2 pl-3 border border-gray-300 rounded-md";

  // input type
  const inputType = {
    checkbox: "checkbox",
    color: "color",
    date: "date",
    email: "email",
    file: "file",
    image: "image",
    number: "number",
    password: "password",
    radio: "radio",
    range: "range",
    search: "search",
    submit: "submit",
    text: "text",
  };

  // additional styling
  const stateClasses = {
    disabled: "opacity-50 cursor-not-allowed",
    fullWidth: "w-full",
  };

  // combine all classes
  const inputClasses = [
    baseClasses,
    disabled ? stateClasses.disabled : "",
    fullWidth ? stateClasses.fullWidth : "",
    className,
  ].join(" ");

  return (
    <input
      type={inputType[type]}
      id={id}
      name={name}
      placeholder={placeholder}
      className={inputClasses}
      disabled={disabled}
      {...props}
    ></input>
  );
};

// prop validation
Input.proptTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
