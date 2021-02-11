import { css } from "@emotion/react";

const smoothTheme = css`
  /* General Elements */
  --global-background-color: var(--default-white);

  /* Section Title */
  --styled-title-color: var(--secondary-darker);

  /* Action Button */
  --action-button-background: var(--primary-darker);
  --action-button-color: var(--default-white);
  --action-button-icon-color: var(--default-white);

  /* Burger Button */
  --burger-color-open: var(--default-white);
  --burger-color-close: var(--default-white);

  /* Change Theme Button - Colors symbolizing those Theme Colors */
  --change-theme-button-color: var(--primary-main);
  --change-theme-button-background: var(--secondary-main);

  /* SideMenu Navbar */
  --sidemenu-navbar-text-shadow: 1px 1px 1px var(--secondary-darker);

  /* Planet Cyril - Drawing */
  --planet-Cyril: var(--primary-main);
  --planet-Cyril-stars-light-shade: var(--primary-main);
  --planet-Cyril-stars-dark-shade: var(--secondary-main);

  /* HeroBanner Section */
  --cyril-h2: var(--primary-main);
  --cyril-h2-text-shadow: 1px 1px 1px var(--secondary-darker);

  /* HeroBanner Section - Located in the HalfMoon Shape - Responsive */
  --cyril-h2-responsive: var(--primary-lightest2);
  --cyril-h2-responsive-text-shadow: 1px 1px 3px var(--secondary-darker);

  /* Project Card */
  --projects-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--secondary-darker);
  --featured-projects-name: var(--default-white);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-color: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-darker);

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
  --short-story-name: var(--default-white);

  /* Contact Section */
  --principal-question: var(--default-white);
  --secondary-questions: var(--secondary-main);
  --cyrilo-mail-letters: var(--secondary-main);
  --cyrilo-mail-line: var(--primary-main);
  --github-linkedin-background: var(--primary-main);

  /* Default Colors */
  --default-white: #fffffe;

  /* Primary Color */
  --primary-darker: #72234d;
  --primary-dark: #ab5e78;
  --primary-main: #eebbc3;
  --primary-light: #f4cdcf;
  --primary-lighter: #f9dad9;
  --primary-lightest1: #fdeae7;
  --primary-lightest2: #fef5f3;

  /* Secondary Color */
  --secondary-darker: #060921;
  --secondary-dark: #111632;
  --secondary-main: #232946;
  --secondary-light: #596490;
  --secondary-lighter: #8b98c7;
  --secondary-lightest1: #bdc7ec;
  --secondary-lightest2: #dde3f5;
`;

export default smoothTheme;
