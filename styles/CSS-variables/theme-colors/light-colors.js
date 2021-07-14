import { css } from "@emotion/react";

const lightColors = css`
  /* General Elements */
  --global-background-color: var(--secondary-lightest2); /* General Elements */

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
  --styled-title-color: var(--primary-main);

  /* Action Button */
  --action-button-background: var(--secondary-main);
  --action-button-color: var(--primary-main);
  --action-button-icon-color: var(--default-white);

  /* Burger Button */
  --burger-color-open: var(--primary-main);
  --burger-color-close: var(--default-white);

  /* Change Theme Button - Colors symbolizing those Theme Colors */
  --change-theme-button-color: var(--primary-main);
  --change-theme-button-background: var(--secondary-lightest2);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--primary-main);
  --planet-Cyril-stars-light-shade: var(--primary-main);
  --planet-Cyril-stars-dark-shade: var(--secondary-main);

  /* Project Card - With Primary Main Color RGBA */
  --projects-shadow: 0 16px 24px 0 rgba(226, 60, 85, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--secondary-main);
  --featured-projects-name: var(--primary-main);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-color: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-main);

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
  --cyrilo-mail-letters: var(--primary-main);
  --cyrilo-mail-line: var(--secondary-main);
  --github-linkedin-background: var(--default-white);

  /* 404 Page */
  --404-h1-color: var(--primary-main);
  --404-r-letter: var(--secondary-main);

  /* Selection */
  --color-selection: var(--default-white);
  --color-selection-background: var(--secondary-light);

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
  --secondary-darker: hsl(262, 71%, 7%);
  --secondary-dark: hsl(269, 53%, 12%);
  --secondary-main: hsl(275, 37%, 18%);
  --secondary-light: hsl(279, 25%, 44%);
  --secondary-lighter: hsl(282, 36%, 65%);
  --secondary-lightest1: hsl(286, 56%, 82%);
  --secondary-lightest2: hsl(289, 57%, 91%);
`;

export default lightColors;
