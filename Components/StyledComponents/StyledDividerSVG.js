import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledDividerSVG = styled.svg`
  width: 100%;
  min-width: ${appTheme.globalMinWidth};
  height: 128px;

  path {
    transition: ${appTheme.transitions.svgFill};
  }
`;

export default StyledDividerSVG;
