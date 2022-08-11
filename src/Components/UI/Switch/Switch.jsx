import React, { useContext } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../../../pages/App/App";
import "./styles.scss";

const Switch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleToggleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="display">
      <BsFillMoonStarsFill />
      <label className="label toggle">
        <input
          type="checkbox"
          className="toggle_input"
          onChange={handleToggleChange}
          checked={theme === "light"}
        />
        <div className="toggle-control"></div>
      </label>
      <BsFillSunFill color="yellow" />
    </div>
  );
};

export default Switch;
