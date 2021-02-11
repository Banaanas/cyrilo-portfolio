import { css, Global, useTheme } from "@emotion/react";
import lightColors from "./CSSVarThemeColors/lightColors";
import darkColors from "./CSSVarThemeColors/darkColors";
import smoothColors from "./CSSVarThemeColors/smoothColors";
import coolColors from "./CSSVarThemeColors/coolColors";

// Emotion Global Styles
// Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      // CSS Format
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        /* Text Selection */
        ::selection {
          color: var(--secondary-lightest2);
          background-color: var(--primary-main);
        }

        html {
          box-sizing: border-box;
          height: 100%;
          font-size: 16px; /* Fixed Default Font Size - Because Relative Value (rm / %) would break 
          the layout if User changed Default Font Size in navigator. So layout will
          stay the same, if User changes Default Font Size. But Zoom is still
          possible, because of REM unit use through the App */
          scroll-behavior: smooth; /* Because some Browsers still don't support CSS "scroll-behavior: smooth", React-Scroll
          Library has also been used. cf -> Note 4 */
        }

        body {
          min-width: 320px;
          height: 100%;
          font-family: "Nexa Regular", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          background-color: var(--global-background-color);
          transition: ${theme.transitions.themeColors};
        }

        #__next {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-width: 300px;
          min-height: 100%;
        }

        @font-face {
          font-family: "Nexa Black";
          src: url("./fonts/NexaBlack.otf");
        }
        @font-face {
          font-family: "Nexa Bold";
          src: url("./fonts/NexaBold.otf");
        }
        @font-face {
          font-family: "Nexa Regular";
          src: url("./fonts/NexaRegular.otf");
        }

        @font-face {
          font-family: "Nexa Thin";
          src: url("./fonts/NexaThin.otf");
        }

        @font-face {
          font-family: "Nexa Thin Italic";
          src: url("./fonts/NexaThinItalic.otf");
        }

        /* CSS Variables */
        :root {
          ${lightColors}
        }

        /* @media (prefers-color-scheme: dark) {
          :root {
            ${darkColors}
          }
        } */

        .dark {
          ${darkColors}
        }
        .system {
          ${darkColors}
        }

        .smooth {
          ${smoothColors}
        }
        
        .cool {
          ${coolColors}
        }
      `}
    />
  );
};

export default GlobalStyles;
