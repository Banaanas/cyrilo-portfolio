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
  gap: 1rem;
  align-items: center;
  justify-content: center;
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
