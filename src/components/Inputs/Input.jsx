import React from "react";
import "./Input.css";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
