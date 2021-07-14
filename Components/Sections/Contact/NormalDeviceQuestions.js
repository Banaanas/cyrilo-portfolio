import styled from "@emotion/styled";
import { FirstQuestion, SecondQuestion, ThirdQuestion } from "./ContactQuestions";
import appTheme from "../../../styles/appTheme";

const Container = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: ${appTheme.colors.subsidiaryQuestions};
  text-align: center;

  @media (min-width: 845px) {
    display: flex;
  }

  /* Important Question */

  div:nth-of-type(2) {
    margin: 0 16px;
    padding: 16px;
    color: ${appTheme.colors.principalQuestion};
    font-size: ${appTheme.fontSizes.xl};
    background-color: ${appTheme.colors.secondary.default};
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
