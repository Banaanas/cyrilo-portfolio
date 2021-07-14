import styled from "@emotion/styled";
import appTheme from "../../../styles/appTheme";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40ch;
  padding: 0 32px;
  color: ${appTheme.colors.secondary.darker};
  line-height: 20px;
  text-align: justify;
  border-radius: 16px;
  box-shadow: ${appTheme.elevation.xl};

  h3 {
    margin: 16px 0;
    font-size: ${appTheme.fontSizes.xl2};
    font-family: ${appTheme.fontFamily.nexaBold},
    ${appTheme.fontFamily.alternativeFonts};
  }

  p {
    font-family: "Nexa Regular", sans-serif;
  }
`;

export default TextContainer;
