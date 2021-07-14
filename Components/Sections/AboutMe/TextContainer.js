import styled from "@emotion/styled";
import appTheme from "../../../styles/appTheme";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40ch;
  padding: 0 32px;
  color: var(--secondary-darker);
  line-height: 20px;
  text-align: justify;
  border-radius: 16px;
  box-shadow: ${appTheme.elevation.xl};

  h3 {
    margin: 16px 0;
    font-size: ${({ theme }) => theme.fontSizes.xl2};
    font-family: "Nexa Bold", sans-serif;
  }

  p {
    font-family: "Nexa Regular", sans-serif;
  }
`;

export default TextContainer;
