import { css } from "@emotion/react";

const smoothColors = css`
  /* General Elements */
  --global-background-color: var(--default-white);

  /* Header - HalfMoon */
  --header-halfmoon-shade-1: var(--secondary-darker);
  --header-halfmoon-shade-2: var(--secondary-dark);
  --header-halfmoon-shade-3: var(--secondary-main);

  /* Footer - HalfMoon */
  --footer-halfmoon-shade-1: var(--header-halfmoon-shade-1);
  --footer-halfmoon-shade-2: var(--header-halfmoon-shade-2);
  --footer-halfmoon-shade-3: var(--header-halfmoon-shade-3);

  /* CyriLogo */
  --cyrilogo-color-1: var(--primary-main);
  --cyrilogo-color-2: var(--default-white);

  /* Section Title */
  --styled-title-color: var(--secondary-darker);

  /* Action Button */
  --action-button-background: var(--primary-darker);
  --action-button-color: var(--default-white);
  --action-button-icon-color: var(--default-white);

  /* Burger Button */
  --burger-color-open: var(--default-white);
  --burger-color-close: var(--default-white);

  /* Change Theme Button - Colors symbolizing those Theme Colors */
  --change-theme-button-color: var(--primary-main);
  --change-theme-button-background: var(--secondary-main);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--primary-main);
  --planet-Cyril-stars-light-shade: var(--primary-main);
  --planet-Cyril-stars-dark-shade: var(--secondary-main);

  /* Project Card - With Primary Main Color  RGBA*/
  --projects-shadow: 0 16px 24px 0 rgba(238, 186, 193, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--secondary-dark);
  --featured-projects-name: var(--default-white);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-color: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-dark);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--primary-main);
  --other-projects-name-odd: var(--secondary-darker);
  --other-projects-software-stack-odd: var(--secondary-darker);
  --other-projects-links-color-odd: var(--secondary-darker);
  --other-projects-links-background-color-odd: var(--primary-main);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--secondary-main);
  --other-projects-name-even: var(--default-white);
  --other-projects-software-stack-even: var(--default-white);
  --other-projects-links-color-even: var(--default-white);
  --other-projects-links-background-color-even: var(--secondary-main);

  /* About Me Section - Short Story */
  --short-story-strong: var(--primary-darker);

  /* Contact Section */
  --principal-question: var(--default-white);
  --subsidiary-questions: var(--secondary-main);
  --cyrilo-mail-letters: var(--secondary-main);
  --cyrilo-mail-line: var(--primary-main);
  --github-linkedin-background: var(--primary-main);

  /* 404 Page */
  --404-h1-color: var(--primary-main);
  --404-r-letter: var(--secondary-main);

  /* Selection */
  --color-selection: var(--default-white);
  --color-selection-background: var(--secondary-light);

  /* Default Colors */
  --default-white: hsl(60, 100%, 100%);
  --default-black: hsl(237, 38%, 9%);

  /* Primary Color */
  --primary-darker: hsl(328, 53%, 29%);
  --primary-dark: hsl(340, 31%, 52%);
  --primary-main: hsl(351, 60%, 83%);
  --primary-light: hsl(357, 64%, 88%);
  --primary-lighter: hsl(2, 73%, 91%);
  --primary-lightest1: hsl(8, 85%, 95%);
  --primary-lightest2: hsl(11, 85%, 97%);

  /* Secondary Color */
  --secondary-darker: hsl(233, 69%, 8%);
  --secondary-dark: hsl(231, 49%, 13%);
  --secondary-main: hsl(230, 33%, 21%);
  --secondary-light: hsl(228, 24%, 46%);
  --secondary-lighter: hsl(227, 35%, 66%);
  --secondary-lightest1: hsl(227, 55%, 83%);
  --secondary-lightest2: hsl(225, 55%, 91%);
`;

export default smoothColors;
