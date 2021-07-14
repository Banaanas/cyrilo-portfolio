import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledLink = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  color: ${appTheme.colors.actionButtonColor};
  font-size: ${appTheme.fontSizes.xl};
  font-family: ${appTheme.fontFamily.nexaBlack},
  ${appTheme.fontFamily.alternativeFonts};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${appTheme.colors.actionButtonBackground};
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
    color: ${appTheme.colors.actionButtonIconColor};
    font-size: ${appTheme.fontSizes.xl2};
  }
`;

export default StyledLink;
