import styled from "@emotion/styled";

const StyledDividerSVG = styled.div`
  position: relative;
  width: 100vw;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 8rem;
  background: yellow;

  svg {
    position: absolute;
    width: 100vw;
    max-width: 100%;

    height: 100%;
  }

  path {
    transition: ${({ theme }) => theme.transitions.svgFill};
  }
`;

export default StyledDividerSVG;
