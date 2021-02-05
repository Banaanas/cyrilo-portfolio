import styled from "@emotion/styled";
import {
  FirstQuestion,
  SecondQuestion,
  ThirdQuestion,
} from "./ContactQuestions";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 20rem;
  color: ${({ theme }) => theme.colors.secondary.main};
  text-align: center;

  @media (min-width: 845px) {
    display: none;
  }

  /* First Question */
  div:nth-of-type(1) {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    background-color: ${({ theme }) => theme.colors.secondary.main};
    border-radius: 8px;
  }

  /* Second and third Question */
  div:nth-of-type(2),
  div:nth-of-type(3) {
    color: ${({ theme }) => theme.colors.secondary.main};

    ::before {
      content: "- ";
    }
  }

  hr {
    width: 50%;
    height: 3px;
    margin: 1rem 0;
    background-color: ${({ theme }) => theme.colors.secondary.main};
    border: none;
    border-radius: 8px;
  }
`;

const SmallDeviceQuestions = () => {
  return (
    <StyledContainer>
      <FirstQuestion />
      <hr />
      <SecondQuestion />
      <ThirdQuestion />
    </StyledContainer>
  );
};

export default SmallDeviceQuestions;
