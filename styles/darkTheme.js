import { css } from "@emotion/react";

const darkTheme = css`
  /* General Elements */
  --global-background-color: var(--default-dark);

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

  /* HeroBanner Section */
  --cyril-h2: var(--primary-main);
  --cyril-h2-text-shadow: 1px 1px 3px var(--secondary-main);

  /* HeroBanner Section - Located in the HalfMoon Shape - Responsive */
  --cyril-h2-responsive: var(--primary-main);
  --cyril-h2-responsive-text-shadow: 1px 1px 3px var(--secondary-darker);

  /* Project Card */
  --projects-shadow: 0 16px 24px 0 rgba(255, 226, 39, 0.12); /* Primary Main RGBA */

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
  --short-story-name: var(--secondary-darker);

  /* Contact Section */
  --principal-question: var(--default-white);
  --secondary-questions: var(--secondary-lighter);
  --cyrilo-mail-letters: var(--primary-main);
  --cyrilo-mail-line: var(--secondary-main);
  --github-linkedin-background: var(--primary-main);

  /* Default Colors */
  --default-white: #fbf9fa;
  --default-dark: #0f1021;

  /* Primary Color */
  --primary-darker: #7a6407;
  --primary-dark: #b79c13;
  --primary-main: #ffe227;
  --primary-light: #ffeb5d;
  --primary-lighter: #fff17d;
  --primary-lightest1: #fff7a8;
  --primary-lightest2: #fffbd3;

  /* Secondary Color */
  --secondary-darker: #220835;
  --secondary-dark: #411650;
  --secondary-main: #6a2c70;
  --secondary-light: #a85ca9;
  --secondary-lighter: #d486ce;
  --secondary-lightest1: #f0b6e7;
  --secondary-lightest2: #f7d9f0;
`;

export default darkTheme;
