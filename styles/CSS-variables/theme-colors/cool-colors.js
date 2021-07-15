import { css } from "@emotion/react";

const coolColors = css`
  /* General Elements */
  --global-background-color: var(--color-tertiary-default);

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
  --styled-title-color: var(--color-white-default);

  /* Action Button */
  --action-button-background: var(--color-white-default);
  --action-button-color: var(--color-tertiary-default);
  --action-button-icon-color: var(--color-primary-default);

  /* Burger Button */
  --burger-open-color: var(--color-white-default);
  --burger-close-color: var(--color-white-default);

  /* Change Theme Colors Button
  /* cf. ChangeColorsThemeButton.tsx - Line 20
  /* Here, the CSS Colors Variables used is not the same as the rest
  /* of the Application, but the next in the themeColorsArray order. */
  --change-theme-button-color: var(--color-secondary-darker);
  --change-theme-button-background: var(--color-secondary-lightest-2);

  /* Change Language Button */
  --change-language-button-color: var(--global-background-color);
  --change-language-button-background: var(--color-primary-default);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--color-secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--color-primary-default);
  --planet-Cyril-stars-light-shade: var(--color-primary-default);
  --planet-Cyril-stars-dark-shade: var(--color-secondary-default);

  /* Project Card - With Primary Main Color RGBA */
  --elevation-project-card: 0 8px 24px 0 rgba(243, 180, 184, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--color-secondary-default);
  --featured-projects-name: var(--color-white-default);
  --featured-projects-software-stack: var(--color-white-default);
  --featured-projects-links-color: var(--color-white-default);
  --featured-projects-links-background-color: var(--color-secondary-default);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--color-primary-default);
  --other-projects-name-odd: var(--color-white-default);
  --other-projects-software-stack-odd: var(--color-secondary-default);
  --other-projects-links-color-odd: var(--color-white-default);
  --other-projects-links-background-color-odd: var(--color-primary-default);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--color-secondary-default);
  --other-projects-name-even: var(--color-white-default);
  --other-projects-software-stack-even: var(--color-white-default);
  --other-projects-links-color-even: var(--color-white-default);
  --other-projects-links-background-color-even: var(--color-secondary-default);

  /* About Me Section - Short Story */
  --short-story-strong: var(--color-secondary-darker);

  /* Contact Section */
  --principal-question: var(--color-white-default);
  --subsidiary-questions: var(--color-secondary-lighter);
  --cyrilo-mail-letters: var(--color-white-default);
  --cyrilo-mail-line: var(--color-primary-default);
  --github-linkedin-background: var(--color-white-default);

  /* 404 Page */
  --404-h1-color: var(--color-primary-default);
  --404-r-letter: var(--color-white-default);

  /* Selection */
  --color-selection: var(--color-white-default);
  --color-selection-background: var(--color-secondary-darker);

  /* Default Colors */
  --color-white-default: hsl(330, 20%, 98%);
  --color-black-default: hsl(237, 38%, 9%);

  /* Primary Color */
  --color-primary-darker: hsl(328, 82%, 23%);
  --color-primary-dark: hsl(340, 68%, 38%);
  --color-primary-default: hsl(351, 74%, 56%);
  --color-primary-light: hsl(357, 78%, 68%);
  --color-primary-lighter: hsl(2, 86%, 75%);
  --color-primary-lightest-1: hsl(8, 93%, 84%);
  --color-primary-lightest-2: hsl(13, 90%, 92%);

  /* Secondary Color */
  --color-secondary-darker: hsl(316, 76%, 15%);
  --color-secondary-dark: hsl(328, 60%, 24%);
  --color-secondary-default: hsl(340, 48%, 36%);
  --color-secondary-light: hsl(345, 38%, 54%);
  --color-secondary-lighter: hsl(352, 54%, 69%);
  --color-secondary-lightest-1: hsl(357, 72%, 83%);
  --color-secondary-lightest-2: hsl(4, 73%, 91%);

  /* Tertiary Color */
  --color-tertiary-default: hsl(275, 37%, 18%);
`;

export default coolColors;
