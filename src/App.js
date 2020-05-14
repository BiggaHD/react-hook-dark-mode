import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./hooks/useTheme";
import Toggle from "./components/ToggleContainer";

const Wrapper = styled("div")`
  background: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.body};
  }
  button {
    display: block;
  }
  h4 {
      color: ${(props) => props.theme.body};
      text-align: center;
      display: block;
      margin-top: 1rem;
    }
  }
`;

const App = () => {
  const themeState = useTheme();
  console.log(themeState);

  return (
    <Wrapper>
      <div>
        <h1>React Dark Mode example:</h1>
        <br />

        <Toggle
          toggleTheme={themeState}
          style={{ margin: "auto" }}
          theme={themeState.dark}
        ></Toggle>
        <h4>
          {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </h4>
      </div>
    </Wrapper>
  );
};

export default App;
