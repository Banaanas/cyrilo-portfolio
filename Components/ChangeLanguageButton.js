import styled from "@emotion/styled";
import { MdInvertColors as ChangeColorsThemeIcon } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import themeColorsArray from "../styles/CSSVarThemeColors/themeColorsArray";

const StyledButton = styled.button`
  position: fixed;
  right: 0.5rem;
  bottom: 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  /* Import Next Toggled Colors Theme CSS Variables to use the next  */
  ${({ nextThemeIndex }) => themeColorsArray[nextThemeIndex]}
  /* When click on Button */
  :focus {
    outline: none; /* Outline is unaesthetically squared because SVG has a rounded border */
    box-shadow: 0 0 3pt 2pt var(--change-theme-button-background);; /* To replace the Outline */
  }

  /* Style SVG with Next Theme Colors */
  svg {
    color: var(--change-theme-button-color);
    font-size: ${({ theme }) => theme.fontSizes.xl4};
    stroke-width: 1px;
    background-color: var(--change-theme-button-background);
    border: solid 5px var(--change-theme-button-color);
    border-radius: 50%;
  }
`;

// Cf. -> Note 1 - Flash
// Button to change the Colors Theme
const ChangeColorsThemeButton = () => {
  const [nextThemeIndex, setNextThemeIndex] = useState(0);
  const { theme, themes, setTheme } = useTheme();

  // Determine what will be the Next Theme Index
  useEffect(() => {
    // Copy Array
    const themesArray = [...themes];
    // Find Index of actual Theme
    const themeIndex = themesArray.indexOf(theme);

    // Determine Nex Index
    let newThemeIndex = themeIndex + 1;
    // Set new Index to 0 if the previous one corresponds to the last Theme in array
    if (newThemeIndex >= themesArray.length) {
      newThemeIndex = 0;
    }
    // Update Next Index state
    setNextThemeIndex(newThemeIndex);
  }, [themes, theme, nextThemeIndex]);

  const changeTheme = () => {
    const themesArray = [...themes];
    const themeIndex = themesArray.indexOf(theme);
    let newThemeIndex = themeIndex + 1;

    // Set new Index to 0 if the previous one corresponds to the last Theme in array
    if (newThemeIndex >= themesArray.length) {
      newThemeIndex = 0;
    }
    // Update theme
    setTheme(themesArray[newThemeIndex]);
  };

  return (
    <StyledButton
      onClick={changeTheme}
      nextThemeIndex={nextThemeIndex}
      title="Change Colors Theme"
    >
      <ChangeColorsThemeIcon />
    </StyledButton>
  );
};

export default ChangeColorsThemeButton;
