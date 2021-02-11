import { css } from "@emotion/react";

const lightColors = css`
  /* General Elements */
  --global-background-color: var(--secondary-lightest2);

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

  /* HeroBanner Section */
  --cyril-h2: var(--primary-main);
  --cyril-h2-text-shadow: 1px 1px 0.5px var(--secondary-darker);

  /* HeroBanner Section - Located in the HalfMoon Shape - Responsive */
  --cyril-h2-responsive: var(--primary-lightest2);
  --cyril-h2-responsive-text-shadow: 1px 1px 3px var(--secondary-darker);

  /* Project Card */
  --projects-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);

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
  --short-story-name: var(--primary-main);

  /* Contact Section */
  --principal-question: var(--default-white);
  --secondary-questions: var(--secondary-main);
  --cyrilo-mail-letters: var(--primary-main);
  --cyrilo-mail-line: var(--secondary-main);
  --github-linkedin-background: var(--default-white);

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
  --secondary-darker: #0e051e;
  --secondary-dark: #1d0e2d;
  --secondary-main: #311d3f;
  --secondary-light: #77538b;
  --secondary-lighter: #b285c5;
  --secondary-lightest1: #dfb8eb;
  --secondary-lightest2: #f0daf5;
`;

export default lightColors;
