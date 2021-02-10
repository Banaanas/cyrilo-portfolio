import { css } from "@emotion/react";

const darkTheme = css`
  /* General Elements */
  --global-background-color: var(--default-dark);
  --styled-title-color: var(--primary-main);

  /* HeroBanner Section */
  --cyril-h2: var(--primary-main);

  /* HeroBanner Section - Located in the HalfMoon Shape - Responsive */
  --cyril-h2-responsive: var(--primary-main);
  --cyril-h2-responsive-text-stroke: 0.5px var(--secondary-darker);
  --cyril-h2-responsive-text-shadow: 0 0 3px var(--secondary-darker);

  /* Project Card */
  --projects-shadow: 0 16px 24px 0 rgba(255, 226, 39, 0.12); /* Primary Main RGBA */

  /* Featured Projects */
  --featured-projects-background: var(--secondary-dark);
  --featured-projects-name: var(--primary-main);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-dark);
  --featured-projects-links-color: var(--default-white);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--primary-main);
  --other-projects-software-stack-odd: var(--secondary-main);
  --other-projects-name-odd: var(--secondary-main);
  --other-projects-links-color-odd: var(--secondary-main);
  --other-projects-links-background-color-odd: var(--primary-main);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--secondary-main);
  --other-projects-name-even: var(--primary-main);
  --other-projects-software-stack-even: var(--default-white);
  --other-projects-links-background-color-even: var(--secondary-main);
  --other-projects-links-color-even: var(--default-white);

  /* Short Story */
  --short-story-name: var(--secondary-darker);

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

  /* Others - Only for DarkTheme (SideMenu Navbar) */
  --text-stroke-darktheme: 0.8px #0f1021;
`;

export default darkTheme;
