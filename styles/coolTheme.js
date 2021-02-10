import { css } from "@emotion/react";

const coolTheme = css`
  /* General Elements */
  --global-background-color: var(--primary-lightest2);
  --styled-title-color: var(--primary-main);

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
  --featured-projects-links-background-color: var(--secondary-dark);
  --featured-projects-links-color: var(--default-white);

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
  --other-projects-links-background-color-even: var(--secondary-main);
  --other-projects-links-color-even: var(--default-white);

  /* Short Story */
  --short-story-name: var(--primary-main);

  /* Default Colors */
  --default-white: #fbf9fa;

  /* Primary Color */
  --primary-darker: #045858;
  --primary-dark: #0b856c;
  --primary-main: #17b978;
  --primary-light: #49d58e;
  --primary-lighter: #6feaa0;
  --primary-lightest1: #a1f8bb;
  --primary-lightest2: #cffbd8;

  /* Secondary Color */
  --secondary-darker: #010627;
  --secondary-dark: #030e3b;
  --secondary-main: #071a52;
  --secondary-light: #2f4c97;
  --secondary-lighter: #5b7dcb;
  --secondary-lightest1: #96b3ed;
  --secondary-lightest2: #c9d9f6;
`;

export default coolTheme;
