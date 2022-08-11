import React from "react";
import Switch from "../UI/Switch/Switch";
import "./styles.scss";

const Header = ({ theme }) => {
  return (
    <header>
      <h1 className={`text-${theme}`}>findADev.</h1>
      <Switch />
    </header>
  );
};

export default Header;
