import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Button from "../../Button/Button";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <Button
        className="cta-button"
        icon={FaPlus}
        onClick={() => alert("Button Clicked!")}
        title="Hire Me"
      >
        Hire Me
      </Button>
    </header>
  );
};

export default Header;
