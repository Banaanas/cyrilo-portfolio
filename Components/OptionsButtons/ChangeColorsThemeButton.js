import styled from "@emotion/styled";
import { MdInvertColors as ChangeColorsThemeIcon } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import themeColorsArray from "../../styles/CSS-variables/theme-colors/themeColorsArray";
import buttonFocusStyle from "../../styles/css-composition";
import appTheme from "../../styles/appTheme";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  /* Import Next Toggled Colors Theme CSS Variables to use the next  in the themeColorsArray order */

  ${({ nextThemeIndex }) => themeColorsArray[nextThemeIndex]}
    /* When click on Button */
  :focus {
    ${buttonFocusStyle}
  }

  /* Style SVG with Next Theme Colors */

  svg {
    color: ${appTheme.colors.changeThemeButtonColor};
    font-size: ${appTheme.fontSizes.xl4};
    stroke-width: 1px;
    background-color: ${appTheme.colors.changeThemeButtonBackground};
    border: solid 5px ${appTheme.colors.changeThemeButtonColor};
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
    <Button
      onClick={changeTheme}
      nextThemeIndex={nextThemeIndex}
      title="Change Colors Theme"
    >
      <ChangeColorsThemeIcon />
    </Button>
  );
};

export default ChangeColorsThemeButton;
