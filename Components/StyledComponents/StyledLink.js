import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledLink = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  color: var(--action-button-color);
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: "Nexa Black", sans-serif;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background-color: var(--action-button-background);
  border: none;
  border-radius: 8px;
  box-shadow: ${appTheme.elevation.md};
  cursor: pointer;

  /* Link Text */

  span {
    display: inline-flex;
    align-items: center;
    margin: 0 8px;
    line-height: 100%; /* To Align Span and Icon */
  }

  svg {
    color: var(--action-button-icon-color);
    font-size: ${({ theme }) => theme.fontSizes.xl2};
  }
`;

export default StyledLink;
