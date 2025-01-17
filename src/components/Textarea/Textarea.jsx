import React from "react";
import "./Textarea.css";

const Textarea = ({ placeholder, value, onChange, required = false }) => {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Textarea;
