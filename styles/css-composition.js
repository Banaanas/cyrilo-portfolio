import { css } from "@emotion/react";
import appTheme from "./appTheme";

// Set Focus Style for Change Colors Theme and Change Language Buttons
const buttonFocusStyle = css`
  outline: none; /* Outline is unaesthetically squared because SVG has a rounded border */
  box-shadow: 0 0 3px 2px ${appTheme.colors.actionButtonBackground}; /* To replace the Outline */
`;

export default buttonFocusStyle;
