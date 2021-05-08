import { css, Global, useTheme } from "@emotion/react";
import globalColors from "./CSSVariables/theme-colors/global-colors";
import lightColors from "./CSSVariables/theme-colors/light-colors";
import darkColors from "./CSSVariables/theme-colors/dark-colors";
import smoothColors from "./CSSVariables/theme-colors/smooth-colors";
import coolColors from "./CSSVariables/theme-colors/cool-colors";
import fontProperties from "./CSSVariables/font-properties";

// Emotion Global Styles
const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        /* CSS RESET - Next.js authorizes Materialize.css (Global CSS) to be imported ONLY
        from _app.js */

        /* GLOBAL STYLES */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          line-height: 1.45;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: auto;
        }

        html {
          box-sizing: border-box;
          height: 100%;
          font-size: 16px; /* Fixed Default Font Size - Because Relative Value (rm / %) would break 
          the layout if User changed Default Font Size in navigator. So layout will
          stay the same, if User changes Default Font Size. But Zoom is still
          possible, whether it's with REM or PX */
          scroll-behavior: smooth; /* Because some Browsers still don't support CSS "scroll-behavior: smooth", React-Scroll
          Library has also been used. cf -> Note 4 */
        }

        body {
          min-width: 320px;
          height: 100%;
          font-family: "Nexa Regular", var(--alternative-fonts);
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

        /* Scrollbar and Selection styles */
        ::selection {
          color: white;
          background-color: var(--primary-main);
        }

        @media (orientation: landscape) {
          ::-webkit-scrollbar {
            width: 9px;
            height: 11px;
            background-color: transparent;
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
};

export default GlobalStyles;
