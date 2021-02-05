import styled from "@emotion/styled";

const StyledDividerContainer = styled.div`
  position: relative;
  width: 100vw;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 8rem;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default StyledDividerContainer;
