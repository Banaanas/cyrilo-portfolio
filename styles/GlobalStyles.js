import { css, Global } from "@emotion/react";
import appTheme from "./appTheme";
import globalColors from "./CSS-variables/theme-colors/global-colors";
import lightColors from "./CSS-variables/theme-colors/light-colors";
import darkColors from "./CSS-variables/theme-colors/dark-colors";
import smoothColors from "./CSS-variables/theme-colors/smooth-colors";
import coolColors from "./CSS-variables/theme-colors/cool-colors";
import fontProperties from "./CSS-variables/font-properties";

// Emotion Global Styles
const GlobalStyles = () => (
  <Global
    styles={css`
      /* CSS RESET - Next.js authorizes Materialize.css (Global CSS) to be imported ONLY
        from _app.js */

      /* GLOBAL STYLES */
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        line-height: 1.45;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: auto;
      }

      html {
        box-sizing: border-box;
        height: 100%;

        /* 16px - Fixed Default Font Size - Because Relative Value (rm / %) would break 
        the layout if User changed Default Font Size in navigator. So layout will
        stay the same, if User changes Default Font Size. But Zoom is still
        possible, whether it's with REM or PX */
        font-size: var(--base-font-size);

        scroll-behavior: smooth; /* Because some Browsers still don't support CSS "scroll-behavior: smooth", React-Scroll
          Library has also been used. cf -> Note 4 */
      }

      body {
        min-width: ${appTheme.globalMinWidth};
        height: 100%;
        font-family: "Nexa Regular", var(--alternative-fonts);
        background-color: var(--global-background-color);
        transition: ${appTheme.transitions.themeColors};
      }

      #__next {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 100%;
        isolation: isolate; /* Create a stacking context without a z-index. This ensures that all portal content
          (modals and tooltips) will float above the Next app */
      }

      body,
      button,
      input,
      select,
      option {
        font-weight: var(--font-weight-light);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong {
        font-weight: var(--font-weight-bold);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        text-rendering: optimizeLegibility;
      }

      p {
        margin-bottom: 1.5em;
        font-size: 1.125rem;
      }

      em {
        font-style: italic;
      }

      strong {
        font-weight: var(--font-weight-medium);
      }

      /* Images - Alt Attribute Text */
      img {
        color: white;
        text-align: center;
      }

      a:focus {
        outline: 5px auto var(--primary-main);
      }

      /* Selection and Scrollbar styles */
      ::selection {
        color: var(--color-selection);
        background-color: var(--color-selection-background);
      }

      @media (orientation: portrait) {
        ::-webkit-scrollbar {
          background-color: var(--secondary-lightest1);
        }
        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--primary-main);
          border: 2px solid var(--primary-main);
          border-radius: 10px;
        }
      }

      @media (orientation: landscape) {
        ::-webkit-scrollbar {
          width: 8px;
          height: 16px;
          background-color: var(--secondary-lightest1);
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: var(--primary-main);
          border-radius: 10px;
        }
      }

      /* Fonts */
      @font-face {
        font-family: "Nexa Black";
        src: url("./fonts/Nexa-Black.otf");
      }

      @font-face {
        font-family: "Nexa Bold";
        src: url("./fonts/Nexa-Bold.otf");
      }

      @font-face {
        font-family: "Nexa Regular";
        src: url("./fonts/Nexa-Regular.otf");
      }

      @font-face {
        font-family: "Nexa Thin";
        src: url("./fonts/Nexa-Thin.otf");
      }

      @font-face {
        font-family: "Nexa Thin Italic";
        src: url("./fonts/Nexa-ThinItalic.otf");
      }

      /* CSS Variables */

      /* Default Variables */
      :root {
        ${fontProperties}
        ${globalColors}
          ${lightColors}
      }

      /* Dark Theme */
      .dark {
        ${darkColors}
      }

      /* Smooth Theme */
      .smooth {
        ${smoothColors}
      }

      /* Cool Theme */
      .cool {
        ${coolColors}
      }
    `}
  />
);

export default GlobalStyles;
