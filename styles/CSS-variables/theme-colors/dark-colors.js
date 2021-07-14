import { css } from "@emotion/react";

const darkColors = css`
  /* General Elements */
  --global-background-color: var(--color-black-default);

  /* Header - HalfMoon */
  --header-halfmoon-shade-1: var(--color-secondary-darker);
  --header-halfmoon-shade-2: var(--color-secondary-dark);
  --header-halfmoon-shade-3: var(--color-secondary-default);

  /* Footer - HalfMoon */
  --footer-halfmoon-shade-1: var(--header-halfmoon-shade-1);
  --footer-halfmoon-shade-2: var(--header-halfmoon-shade-2);
  --footer-halfmoon-shade-3: var(--header-halfmoon-shade-3);

  /* CyriLogo */
  --cyrilogo-color-1: var(--color-primary-default);
  --cyrilogo-color-2: var(--color-white-default);

  /* Section Title */
  --styled-title-color: var(--color-primary-default);

  /* Action Button */
  --action-button-background: var(--color-secondary-default);
  --action-button-color: var(--color-primary-default);
  --action-button-icon-color: var(--color-white-default);

  /* Burger Button */
  --burger-open-color: var(--color-primary-default);
  --burger-close-color: var(--color-white-default);

  /* Change Theme Button - Colors symbolizing those Theme Colors */
  --change-theme-button-color: var(--color-primary-default);
  --change-theme-button-background: var(--color-secondary-default);

  /* Change Language Button */
  --change-language-button-clr: var(--global-background-color);
  --change-language-button-bckgd: var(--color-primary-default);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--color-secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--color-primary-default);
  --planet-Cyril-stars-light-shade: var(--color-primary-default);
  --planet-Cyril-stars-dark-shade: var(--color-secondary-default);

  /* Project Card - With Primary Main Color RGBA */
  --elevation-project-card: 0 16px 24px 0 rgba(255, 226, 41, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--color-secondary-default);
  --featured-projects-name: var(--color-primary-default);
  --featured-projects-software-stack: var(--color-white-default);
  --featured-projects-links-color: var(--color-white-default);
  --featured-projects-links-background-color: var(--color-secondary-default);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--color-primary-default);
  --other-projects-software-stack-odd: var(--color-secondary-darker);
  --other-projects-name-odd: var(--color-secondary-darker);
  --other-projects-links-color-odd: var(--color-secondary-darker);
  --other-projects-links-background-color-odd: var(--color-primary-default);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--color-secondary-default);
  --other-projects-name-even: var(--color-primary-default);
  --other-projects-software-stack-even: var(--color-white-default);
  --other-projects-links-color-even: var(--color-white-default);
  --other-projects-links-background-color-even: var(--color-secondary-default);

  /* About Me Section - Short Story */
  --short-story-strong: var(--color-secondary-darker);

  /* Contact Section */
  --principal-question: var(--color-white-default);
  --subsidiary-questions: var(--color-secondary-lighter);
  --cyrilo-mail-letters: var(--color-primary-default);
  --cyrilo-mail-line: var(--color-secondary-default);
  --github-linkedin-background: var(--color-primary-default);

  /* 404 Page */
  --404-h1-color: var(--color-primary-default);
  --404-r-letter: var(--color-secondary-default);

  /* Selection */
  --color-selection: var(--color-white-default);
  --color-selection-background: var(--color-secondary-dark);

  /* Default Colors */
  --color-white-default: hsl(330, 20%, 98%);
  --color-black-default: hsl(237, 38%, 9%);

  /* Primary Color */
  --color-primary-darker: hsl(49, 89%, 25%);
  --color-primary-dark: hsl(50, 81%, 40%);
  --color-primary-default: hsl(52, 100%, 58%);
  --color-primary-light: hsl(53, 100%, 68%);
  --color-primary-lighter: hsl(54, 100%, 75%);
  --color-primary-lightest-1: hsl(54, 100%, 83%);
  --color-primary-lightest-2: hsl(55, 100%, 91%);

  /* Secondary Color */
  --color-secondary-darker: hsl(275, 74%, 12%);
  --color-secondary-dark: hsl(284, 57%, 20%);
  --color-secondary-default: hsl(295, 44%, 31%);
  --color-secondary-light: hsl(299, 31%, 51%);
  --color-secondary-lighter: hsl(305, 48%, 68%);
  --color-secondary-lightest-1: hsl(309, 66%, 83%);
  --color-secondary-lightest-2: hsl(314, 65%, 91%);
`;

export default darkColors;
