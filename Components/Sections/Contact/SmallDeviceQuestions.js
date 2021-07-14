import styled from "@emotion/styled";
import { FirstQuestion, SecondQuestion, ThirdQuestion } from "./ContactQuestions";
import appTheme from "../../../styles/appTheme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  color: ${appTheme.colors.secondary.default};
  text-align: center;

  @media (min-width: 845px) {
    display: none;
  }

  /* Important Question */

  div:nth-of-type(1) {
    padding: 16px;
    color: ${appTheme.colors.principalQuestion};
    font-size: ${appTheme.fontSizes.xl};
    background-color: ${appTheme.colors.secondary.default};
    border-radius: 8px;
  }

  /* Subsidiary Questions */

  div:nth-of-type(2),
  div:nth-of-type(3) {
    color: ${appTheme.colors.subsidiaryQuestions};

    ::before {
      content: "- ";
    }
  }

  hr {
    width: 50%;
    height: 3px;
    margin: 16px 0;
    background-color: ${appTheme.colors.secondary.default};
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
