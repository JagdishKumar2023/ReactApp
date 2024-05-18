// App.js
import React from "react";
import { ThemeProvider } from "./DarkTheme/ThemeProvider";
import Content from "./DarkTheme/Content";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
