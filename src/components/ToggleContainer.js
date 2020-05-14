import React from "react";
import styled from "@emotion/styled";
import moon from "../assets/icons/moon.png";
import sun from "../assets/icons/sun.png";

const ToggleContainer = styled("button")`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 8rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-of-type {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-of-type(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer lightTheme={theme} onClick={toggleTheme.toggle}>
      <img src={sun} width="224" height="224" alt="Light mode" />
      <img src={moon} width="224" height="224" alt="Dark Mode" />
    </ToggleContainer>
  );
};

export default Toggle;
