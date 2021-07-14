import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledDiv = styled.div`
  width: 3px;
  height: 75%;
  background-color: ${appTheme.colors.secondary.default};
  border-radius: 8px;
`;
const StyledVerticalLine = () => {
  return <StyledDiv />;
};

export default StyledVerticalLine;
