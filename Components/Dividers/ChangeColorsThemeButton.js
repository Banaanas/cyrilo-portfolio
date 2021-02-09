import { useState, useEffect } from "react/";
import styled from "@emotion/styled";
import { MdInvertColors as ChangeColorsThemeIcon } from "react-icons/md";
import { useTheme } from "next-themes";
import appThemesArray from "../../styles/appThemesArray";

const StyledButton = styled.button`
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  /* When click on Button */
  :focus {
    outline: none; /* Outline is unaesthetically squared because SVG has a rounded border */
    box-shadow: 0 0 3pt 2pt
      ${({ nextThemeIndex }) =>
        appThemesArray[nextThemeIndex].colors.primary
          .main}; /* To replace the Outline */
  }

  /* Style SVG with Next Theme Colors */
  svg {
    font-size: ${({ theme }) => theme.fontSizes.xl4};
    stroke-width: 1px;
    background-color: ${({ nextThemeIndex }) =>
      appThemesArray[nextThemeIndex].colors.primary.main};
    color: ${({ nextThemeIndex }) =>
      appThemesArray[nextThemeIndex].colors.secondary.main};
    border: solid 5px
      ${({ nextThemeIndex }) =>
        appThemesArray[nextThemeIndex].colors.secondary.main};
    border-radius: 50%;
  }
`;

// Cf. Note 1 - Flash
// Button to change the Colors Theme
const ChangeColorsThemeButton = ({ changeThemeFunction, themeIndex }) => {
  // Determine what the Next Theme is to style the button with
  // Next Theme colors
  const [nextThemeIndex, setNextThemeIndex] = useState(0);

  // useEffect
  useEffect(() => {
    let newThemeIndex = themeIndex + 1;

    // Set new Index to 0 if the previous one corresponds to the last Theme in array
    if (newThemeIndex >= appThemesArray.length) {
      newThemeIndex = 0;
    }
    // Convert String to Number
    newThemeIndex = Number(newThemeIndex);

    // Update nextThemeIndex
    setNextThemeIndex(newThemeIndex);
  }, [themeIndex, nextThemeIndex]);

  const { theme, themes, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  });
  const changeTheme = () => {
    const themesArray = [...themes];
    const themeIndex2 = themesArray.indexOf(theme);
    let newThemeIndex = themeIndex2 + 1;

    // Set new Index to 0 if the previous one corresponds to the last Theme in array
    if (newThemeIndex >= themesArray.length) {
      newThemeIndex = 0;
    }
    // Update theme
    setTheme(themesArray[newThemeIndex]);
  };

  return (
    <StyledButton
      /*
      onClick={changeThemeFunction}
*/
      onClick={changeTheme}
      nextThemeIndex={nextThemeIndex}
      title="Change Colors Theme"
    >
      <ChangeColorsThemeIcon />
    </StyledButton>
  );
};

export default ChangeColorsThemeButton;
