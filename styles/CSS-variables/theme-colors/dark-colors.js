import { css } from "@emotion/react";

const darkColors = css`
  /* General Elements */
  --global-background-color: var(--default-black);

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
  --change-theme-button-color: var(--global-background-color);
  --change-theme-button-background: var(--primary-main);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--primary-main);
  --planet-Cyril-stars-light-shade: var(--primary-main);
  --planet-Cyril-stars-dark-shade: var(--secondary-main);

  /* Project Card - With Primary Main Color RGBA */
  --projects-shadow: 0 16px 24px 0 rgba(255, 226, 41, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--secondary-main);
  --featured-projects-name: var(--primary-main);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-color: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-main);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--primary-main);
  --other-projects-software-stack-odd: var(--secondary-darker);
  --other-projects-name-odd: var(--secondary-darker);
  --other-projects-links-color-odd: var(--secondary-darker);
  --other-projects-links-background-color-odd: var(--primary-main);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--secondary-main);
  --other-projects-name-even: var(--primary-main);
  --other-projects-software-stack-even: var(--default-white);
  --other-projects-links-color-even: var(--default-white);
  --other-projects-links-background-color-even: var(--secondary-main);

  /* About Me Section - Short Story */
  --short-story-strong: var(--secondary-darker);

  /* Contact Section */
  --principal-question: var(--default-white);
  --subsidiary-questions: var(--secondary-lighter);
  --cyrilo-mail-letters: var(--primary-main);
  --cyrilo-mail-line: var(--secondary-main);
  --github-linkedin-background: var(--primary-main);

  /* 404 Page */
  --404-h1-color: var(--primary-main);
  --404-r-letter: var(--secondary-main);

  /* Selection */
  --color-selection: var(--default-white);
  --color-selection-background: var(--secondary-dark);

  /* Default Colors */
  --default-white: hsl(330, 20%, 98%);
  --default-black: hsl(237, 38%, 9%);

  /* Primary Color */
  --primary-darker: hsl(49, 89%, 25%);
  --primary-dark: hsl(50, 81%, 40%);
  --primary-main: hsl(52, 100%, 58%);
  --primary-light: hsl(53, 100%, 68%);
  --primary-lighter: hsl(54, 100%, 75%);
  --primary-lightest1: hsl(54, 100%, 83%);
  --primary-lightest2: hsl(55, 100%, 91%);

  /* Secondary Color */
  --secondary-darker: hsl(275, 74%, 12%);
  --secondary-dark: hsl(284, 57%, 20%);
  --secondary-main: hsl(295, 44%, 31%);
  --secondary-light: hsl(299, 31%, 51%);
  --secondary-lighter: hsl(305, 48%, 68%);
  --secondary-lightest1: hsl(309, 66%, 83%);
  --secondary-lightest2: hsl(314, 65%, 91%);
`;

export default darkColors;
