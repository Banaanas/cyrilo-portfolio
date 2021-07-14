import { css } from "@emotion/react";

const smoothColors = css`
  /* General Elements */
  --global-background-color: var(--color-white-default);

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
  --styled-title-color: var(--color-secondary-darker);

  /* Action Button */
  --action-button-background: var(--color-primary-darker);
  --action-button-color: var(--color-white-default);
  --action-button-icon-color: var(--color-white-default);

  /* Burger Button */
  --burger-open-color: var(--color-white-default);
  --burger-close-color: var(--color-white-default);

  /* Change Theme Button - Colors symbolizing those Theme Colors */
  --change-theme-button-clr: var(--color-primary-default);
  --change-theme-button-bckgd: var(--color-secondary-default);

  /* Change Language Button */
  --change-language-button-color: var(--color-primary-default);
  --change-language-button-background: var(--color-secondary-default);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--color-secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--color-primary-default);
  --planet-Cyril-stars-light-shade: var(--color-primary-default);
  --planet-Cyril-stars-dark-shade: var(--color-secondary-default);

  /* Project Card - With Primary Main Color RGBA */
  --elevation-project-card: 0 16px 24px 0 rgba(238, 186, 193, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--color-secondary-dark);
  --featured-projects-name: var(--color-white-default);
  --featured-projects-software-stack: var(--color-white-default);
  --featured-projects-links-color: var(--color-white-default);
  --featured-projects-links-background-color: var(--color-secondary-dark);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--color-primary-default);
  --other-projects-name-odd: var(--color-secondary-darker);
  --other-projects-software-stack-odd: var(--color-secondary-darker);
  --other-projects-links-color-odd: var(--color-secondary-darker);
  --other-projects-links-background-color-odd: var(--color-primary-default);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--color-secondary-default);
  --other-projects-name-even: var(--color-white-default);
  --other-projects-software-stack-even: var(--color-white-default);
  --other-projects-links-color-even: var(--color-white-default);
  --other-projects-links-background-color-even: var(--color-secondary-default);

  /* About Me Section - Short Story */
  --short-story-strong: var(--color-primary-darker);

  /* Contact Section */
  --principal-question: var(--color-white-default);
  --subsidiary-questions: var(--color-secondary-default);
  --cyrilo-mail-letters: var(--color-secondary-default);
  --cyrilo-mail-line: var(--color-primary-default);
  --github-linkedin-background: var(--color-primary-default);

  /* 404 Page */
  --404-h1-color: var(--color-primary-default);
  --404-r-letter: var(--color-secondary-default);

  /* Selection */
  --color-selection: var(--color-white-default);
  --color-selection-background: var(--color-secondary-light);

  /* Default Colors */
  --color-white-default: hsl(60, 100%, 100%);
  --color-black-default: hsl(237, 38%, 9%);

  /* Primary Color */
  --color-primary-darker: hsl(328, 53%, 29%);
  --color-primary-dark: hsl(340, 31%, 52%);
  --color-primary-default: hsl(351, 60%, 83%);
  --color-primary-light: hsl(357, 64%, 88%);
  --color-primary-lighter: hsl(2, 73%, 91%);
  --color-primary-lightest-1: hsl(8, 85%, 95%);
  --color-primary-lightest-2: hsl(11, 85%, 97%);

  /* Secondary Color */
  --color-secondary-darker: hsl(233, 69%, 8%);
  --color-secondary-dark: hsl(231, 49%, 13%);
  --color-secondary-default: hsl(230, 33%, 21%);
  --color-secondary-light: hsl(228, 24%, 46%);
  --color-secondary-lighter: hsl(227, 35%, 66%);
  --color-secondary-lightest-1: hsl(227, 55%, 83%);
  --color-secondary-lightest-2: hsl(225, 55%, 91%);
`;

export default smoothColors;
