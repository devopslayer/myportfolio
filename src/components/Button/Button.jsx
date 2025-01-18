import React from "react";
import "./Button.css";

const Button = ({ children, onClick, type = "button", icon: Icon }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {Icon && <Icon className="btn-icon" />}
      {children}
    </button>
  );
};

export default Button;
