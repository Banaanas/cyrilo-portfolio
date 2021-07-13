import styled from "@emotion/styled";
import { FirstQuestion, SecondQuestion, ThirdQuestion } from "./ContactQuestions";

const Container = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: var(--subsidiary-questions);
  text-align: center;

  @media (min-width: 845px) {
    display: flex;
  }

  /* Important Question */
  div:nth-of-type(2) {
    margin: 0 1rem;
    padding: 1rem;
    color: var(--principal-question);
    font-size: ${({ theme }) => theme.fontSizes.xl};
    background-color: var(--secondary-main);
    border-radius: 4px;
  }
`;

const NormalDeviceQuestions = () => {
  return (
    <Container>
      <SecondQuestion />
      <FirstQuestion />
      <ThirdQuestion />
    </Container>
  );
};

export default NormalDeviceQuestions;
