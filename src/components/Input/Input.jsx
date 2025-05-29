import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  placeholder = "Input",
  className = "",
  ...props
}) => {
  // base styling
  const baseClasses =
    "block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 pl-4";

  // input type
  const inputType = {
    button: "button",
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

  console.log(inputType[type]);
  console.log(placeholder);
  return (
    <input
      type={inputType[type]}
      placeholder={placeholder}
      className={inputClasses}
      {...props}
    ></input>
  );
};

// prop validation
Input.proptTypes = {
  type: PropTypes.string,
};

export default Input;
