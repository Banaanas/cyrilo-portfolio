import { css } from "@emotion/react";

const lightTheme = css`
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
  --primary-darker: #7f002a;
  --primary-dark: #be003f;
  --primary-main: #fd0054;
  --primary-light: #fe7fa9;
  --primary-lighter: #febfd4;
  --primary-lightest1: #ffe5ee;
  --primary-lightest2: #fff2f6;

  /* Secondary Color */
  --secondary-darker: #161012;
  --secondary-dark: #20181b;
  --secondary-main: #2b2024;
  --secondary-light: #958f91;
  --secondary-lighter: #cac7c8;
  --secondary-lightest1: #e9e8e9;
  --secondary-lightest2: #f4f4f4;
`;

export default lightTheme;
