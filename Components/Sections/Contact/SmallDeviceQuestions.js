import styled from "@emotion/styled";
import { FirstQuestion, SecondQuestion, ThirdQuestion } from "./ContactQuestions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  color: var(--secondary-main);
  text-align: center;

  @media (min-width: 845px) {
    display: none;
  }

  /* Important Question */
  div:nth-of-type(1) {
    padding: 16px;
    color: var(--principal-question);
    font-size: ${({ theme }) => theme.fontSizes.xl};
    background-color: var(--secondary-main);
    border-radius: 8px;
  }

  /* Subsidiary Questions */
  div:nth-of-type(2),
  div:nth-of-type(3) {
    color: var(--subsidiary-questions);

    ::before {
      content: "- ";
    }
  }

  hr {
    width: 50%;
    height: 3px;
    margin: 16px 0;
    background-color: var(--secondary-main);
    border: none;
    border-radius: 8px;
  }
`;

const SmallDeviceQuestions = () => {
  return (
    <Container>
      <FirstQuestion />
      <hr />
      <SecondQuestion />
      <ThirdQuestion />
    </Container>
  );
};

export default SmallDeviceQuestions;
