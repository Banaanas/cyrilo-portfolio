import styled from "@emotion/styled";

const StyledLink = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  color: var(--action-button-color);
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: "Nexa Black", sans-serif;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background-color: var(--action-button-background);
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;

  /* Link Text */
  span {
    display: inline-flex;
    align-items: center;
    margin: 0 0.5rem;
    line-height: 100%; /* To Align Span and Icon */
  }

  svg {
    color: var(--action-button-icon-color);
    font-size: ${({ theme }) => theme.fontSizes.xl2};
  }
`;

export default StyledLink;
