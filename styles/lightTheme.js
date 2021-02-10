import { css } from "@emotion/react";

const lightTheme = css`
  /* General Elements */
  --global-background-color: var(--secondary-lightest2);
  --styled-title-color: var(--primary-main);

  /* Change Theme Button - Colors symbolizing those Theme Colors */
  --change-theme-button-color: var(--primary-main);
  --change-theme-button-background: var(--secondary-lightest2);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--primary-main);
  --planet-Cyril-stars-light-shade: var(--primary-main);
  --planet-Cyril-stars-dark-shade: var(--secondary-main);

  /* HeroBanner Section */
  --cyril-h2: var(--primary-main);

  /* HeroBanner Section - Located in the HalfMoon Shape - Responsive */
  --cyril-h2-responsive: var(--primary-main);
  --cyril-h2-responsive-text-stroke: 0.5px var(--secondary-darker);
  --cyril-h2-responsive-text-shadow: 0 0 3px var(--secondary-darker);

  /* Project Card */
  --projects-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--secondary-darker);
  --featured-projects-name: var(--primary-main);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-color: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-darker);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--primary-main);
  --other-projects-name-odd: var(--secondary-main);
  --other-projects-software-stack-odd: var(--secondary-main);
  --other-projects-links-color-odd: var(--secondary-main);
  --other-projects-links-background-color-odd: var(--primary-main);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--secondary-main);
  --other-projects-name-even: var(--primary-main);
  --other-projects-software-stack-even: var(--default-white);
  --other-projects-links-color-even: var(--default-white);
  --other-projects-links-background-color-even: var(--secondary-main);

  /* Short Story */
  --short-story-name: var(--primary-main);

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

export default lightTheme;
