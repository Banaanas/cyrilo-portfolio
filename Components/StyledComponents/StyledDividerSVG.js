import styled from "@emotion/styled";

const StyledDividerSVG = styled.svg`
  width: 100%;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 8rem;

  path {
    transition: ${({ theme }) => theme.transitions.svgFill};
  }
`;

export default StyledDividerSVG;
