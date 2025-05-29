import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  id = "",
  name = "",
  value = "",
  placeholder = "Input",
  className = "",
  ...props
}) => {
  // base styling
  const baseClasses = "";

  // input type
  const inputType = {
    checkbox: "checkbox",
    color: "color",
    date: "date",
    datetime: "datetime-local",
    email: "email",
    file: "file",
    hidden: "hidden",
    image: "image",
    month: "month",
    number: "number",
    password: "password",
    radio: "radio",
    range: "range",
    reset: "reset",
    search: "search",
    submit: "submit",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
  };

  // combine all classes
  const inputClasses = [baseClasses, className].join(" ");

  return (
    <input
      type={inputType[type]}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className={inputClasses}
      {...props}
    ></input>
  );
};

// prop validation
Input.proptTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
