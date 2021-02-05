import styled from "@emotion/styled";

const StyledH2 = styled.h2`
  --letter-spacing: 1.5rem;

  display: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-right: calc(
    -1 * var(--letter-spacing)
  ); /* To counterbalance the last letter's spacing */
  font-size: ${({ theme }) => theme.fontSizes.xl2};
  font-family: "Nexa Black", sans-serif;
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
`;

export default StyledH2;
