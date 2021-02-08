import { useState, useEffect } from "react/";
import styled from "@emotion/styled";
import { MdInvertColors as ChangeColorsThemeIcon } from "react-icons/md";
import appThemesArray from "../../styles/appThemesArray";

const StyledButton = styled.button`
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xl4};
    stroke-width: 1px;
    background-color: ${({ nextThemeIndex }) =>
      appThemesArray[nextThemeIndex].colors.primary.main};
    border: solid 5px
      ${({ nextThemeIndex }) =>
        appThemesArray[nextThemeIndex].colors.secondary.main};
    border-radius: 50%;
  }
`;

const ChangeColorsThemeButton = ({ changeThemeFunction, themeIndex }) => {
  const [nextThemeIndex, setNextThemeIndex] = useState(0);

  useEffect(() => {
    let newThemeIndex = themeIndex + 1;
    if (newThemeIndex >= appThemesArray.length) {
      newThemeIndex = 0;
    }
    console.log(themeIndex);
    console.log(newThemeIndex);

    // Convert String to Number
    newThemeIndex = Number(newThemeIndex);
    setNextThemeIndex(newThemeIndex);
    console.log(nextThemeIndex);
  }, [themeIndex, nextThemeIndex]);

  return (
    <StyledButton
      onClick={changeThemeFunction}
      nextThemeIndex={nextThemeIndex}
      title="Change Colors Theme"
    >
      <ChangeColorsThemeIcon />
    </StyledButton>
  );
};

export default ChangeColorsThemeButton;
