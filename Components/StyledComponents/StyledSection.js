import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${appTheme.globalMaxWidth};
  padding: 16px;
`;

export default StyledSection;
