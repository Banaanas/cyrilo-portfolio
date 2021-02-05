import styled from "@emotion/styled";

const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.secondary.main};
  font-size: ${({ theme }) => theme.fontSizes.xl2};
  font-family: "Nexa Black", sans-serif;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;
export default StyledTitle;
