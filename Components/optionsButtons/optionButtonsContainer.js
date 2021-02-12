import styled from "@emotion/styled";
import ChangeLanguageButton from "./ChangeLanguageButton";
import ChangeColorsThemeButton from "./ChangeColorsThemeButton";

const StyledContainer = styled.div`
  position: fixed;
  right: 0.5rem;
  bottom: 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  padding: 0.5rem;
  border-radius: 5px;
  

  /* Gap Between the two Buttons */
  button:nth-of-type(1) {
    margin-bottom: 0.5rem;
  }
`;

const OptionButtonsContainer = () => {
  return (
    <StyledContainer>
      <ChangeColorsThemeButton />
      <ChangeLanguageButton />
    </StyledContainer>
  );
};

export default OptionButtonsContainer;
