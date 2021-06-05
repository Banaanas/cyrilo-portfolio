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

  /* Selection */
  --color-selection: var(--default-white);
  --color-selection-background: var(--secondary-darker);

  /* Default Colors */
  --default-white: hsl(330, 20%, 98%);
  --default-black: hsl(237, 38%, 9%);

  /* Primary Color */
  --primary-darker: hsl(328, 82%, 23%);
  --primary-dark: hsl(340, 68%, 38%);
  --primary-main: hsl(351, 74%, 56%);
  --primary-light: hsl(357, 78%, 68%);
  --primary-lighter: hsl(2, 86%, 75%);
  --primary-lightest1: hsl(8, 93%, 84%);
  --primary-lightest2: hsl(13, 90%, 92%);

  /* Secondary Color */
  --secondary-darker: hsl(316, 76%, 15%);
  --secondary-dark: hsl(328, 60%, 24%);
  --secondary-main: hsl(340, 48%, 36%);
  --secondary-light: hsl(345, 38%, 54%);
  --secondary-lighter: hsl(352, 54%, 69%);
  --secondary-lightest1: hsl(357, 72%, 83%);
  --secondary-lightest2: hsl(4, 73%, 91%);

  /* Tertiary Color */
  --tertiary-main: hsl(275, 37%, 18%);
`;

export default coolColors;
