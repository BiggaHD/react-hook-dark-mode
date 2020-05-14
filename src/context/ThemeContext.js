import React from "react";

const defaultContextData = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);

export default ThemeContext;
