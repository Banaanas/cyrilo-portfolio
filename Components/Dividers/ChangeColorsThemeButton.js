import styled from "@emotion/styled";
import { MdInvertColors as ChangeColorsThemeIcon } from "react-icons/md";
import { useTheme } from "next-themes";

const StyledButton = styled.button`
  position: fixed;
  top: 50%;
  right: 0.5rem;
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
    box-shadow: 0 0 3pt 2pt var(--primary-main); /* To replace the Outline */
  }

  /* Style SVG with Next Theme Colors */
  svg {
    color: var(--secondary-main);
    font-size: ${({ theme }) => theme.fontSizes.xl4};
    stroke-width: 1px;
    background-color: var(--primary-main);
    border: solid 5px var(--secondary-main);
    border-radius: 50%;
  }
`;

// Cf. Note 1 - Flash
// Button to change the Colors Theme
const ChangeColorsThemeButton = () => {
  const { theme, themes, setTheme } = useTheme();

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
    <StyledButton onClick={changeTheme} title="Change Colors Theme">
      <ChangeColorsThemeIcon />
    </StyledButton>
  );
};

export default ChangeColorsThemeButton;
