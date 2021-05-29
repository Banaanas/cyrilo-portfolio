import { css } from "@emotion/react";

const coolColors = css`
  /* General Elements */
  --global-background-color: var(--tertiary-main);

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
  --styled-title-color: var(--default-white);

  /* Action Button */
  --action-button-background: var(--default-white);
  --action-button-color: var(--tertiary-main);
  --action-button-icon-color: var(--primary-main);

  /* Burger Button */
  --burger-color-open: var(--default-white);
  --burger-color-close: var(--default-white);

  /* Change Theme Button - Colors symbolizing those Theme Colors */
  --change-theme-button-color: var(--secondary-darker);
  --change-theme-button-background: var(--primary-main);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--primary-main);
  --planet-Cyril-stars-light-shade: var(--primary-main);
  --planet-Cyril-stars-dark-shade: var(--secondary-main);

  /* Project Card */
  --projects-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--secondary-main);
  --featured-projects-name: var(--default-white);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-color: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-main);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--primary-main);
  --other-projects-name-odd: var(--default-white);
  --other-projects-software-stack-odd: var(--secondary-main);
  --other-projects-links-color-odd: var(--default-white);
  --other-projects-links-background-color-odd: var(--primary-main);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--secondary-main);
  --other-projects-name-even: var(--default-white);
  --other-projects-software-stack-even: var(--default-white);
  --other-projects-links-color-even: var(--default-white);
  --other-projects-links-background-color-even: var(--secondary-main);

  /* About Me Section - Short Story */
  --short-story-strong: var(--secondary-darker);

  /* Contact Section */
  --principal-question: var(--default-white);
  --subsidiary-questions: var(--secondary-lighter);
  --cyrilo-mail-letters: var(--default-white);
  --cyrilo-mail-line: var(--primary-main);
  --github-linkedin-background: var(--default-white);

  /* 404 Page */
  --404-h1-color: var(--primary-main);
  --404-r-letter: var(--default-white);

  /* Default Colors */
  --default-white: #fbf9fa;

  /* Primary Color */
  --primary-darker: #6c0b3e;
  --primary-dark: #a21f4b;
  --primary-main: #e23e57;
  --primary-light: #ed6c73;
  --primary-lighter: #f68e8b;
  --primary-lightest1: #fcbcb2;
  --primary-lightest2: #fde0d8;

  /* Secondary Color */
  --secondary-darker: #410932;
  --secondary-dark: #61183f;
  --secondary-main: #88304e;
  --secondary-light: #b75e74;
  --secondary-lighter: #db8692;
  --secondary-lightest1: #f3b4b7;
  --secondary-lightest2: #f9dad8;

  /* Tertiary Color */
  --tertiary-main: #311d3f;
`;

export default coolColors;