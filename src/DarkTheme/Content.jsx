// Content.js
import React from "react";
import { useTheme } from "../DarkTheme/ThemeProvider";
import "./Theme.css";

const Content = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="mainContainer">
      <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
        <h1>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Content;
