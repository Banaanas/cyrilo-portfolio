import styled from "@emotion/styled";
import {
  FirstQuestion,
  SecondQuestion,
  ThirdQuestion,
} from "./ContactQuestions";

const StyledContainer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.secondary.main};
  text-align: center;

  @media (min-width: 845px) {
    display: flex;
  }

  div:nth-of-type(2) {
    margin: 0 1rem;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.default.white};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    background-color: ${({ theme }) => theme.colors.secondary.main};
    border-radius: 4px;
  }
`;

const NormalDeviceQuestions = () => {
  return (
    <StyledContainer>
      <SecondQuestion />
      <FirstQuestion />
      <ThirdQuestion />
    </StyledContainer>
  );
};

export default NormalDeviceQuestions;
