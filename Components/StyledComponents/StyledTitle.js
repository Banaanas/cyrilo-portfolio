import styled from "@emotion/styled";

const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: var(--styled-title-color);
  font-size: ${({ theme }) => theme.fontSizes.xl2};
  font-family: "Nexa Black", sans-serif;
  text-align: center;
  text-transform: uppercase;
`;
export default StyledTitle;
