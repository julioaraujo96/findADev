import { useState, createContext, useContext } from "react";
import { ThemeContext } from "../../../pages/App/App";
import Header from "../../Header/Header";
import "./styles.scss";

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <div className="wrapper">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
