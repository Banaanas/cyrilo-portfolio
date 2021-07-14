import styled from "@emotion/styled";

const StyledDividerSVG = styled.svg`
  width: 100%;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 128px;

  path {
    transition: ${({ theme }) => theme.transitions.svgFill};
  }
`;

export default StyledDividerSVG;
