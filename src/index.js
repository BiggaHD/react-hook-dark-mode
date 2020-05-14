import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./hooks/useTheme";
import "./css/index.css";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
