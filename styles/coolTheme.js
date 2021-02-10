import { css } from "@emotion/react";

const coolTheme = css`
  /* General Elements */
  --global-background-color: #311d3f;
  --styled-title-color: var(--default-white);

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
  --other-projects-name-odd: var(--secondary-darker);
  --other-projects-software-stack-odd: var(--secondary-main);
  --other-projects-links-color-odd: var(--secondary-darker);
  --other-projects-links-background-color-odd: var(--primary-main);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--secondary-main);
  --other-projects-name-even: var(--default-white);
  --other-projects-software-stack-even: var(--default-white);
  --other-projects-links-color-even: var(--default-white);
  --other-projects-links-background-color-even: var(--secondary-main);

  /* Short Story */
  --short-story-name: var(--primary-main);

  /* Default Colors */
  --default-white: #fbf9fa;

  /* Primary Color */

  --primary-darker: #6C0B3E;
  --primary-dark: #A21F4B;
  --primary-main: #E23E57;
  --primary-light: #ED6C73;
  --primary-lighter: #F68E8B;
  --primary-lightest1: #FCBCB2;
  --primary-lightest2: #FDE0D8;

  /* Secondary Color */
  --secondary-darker: #410932;
  --secondary-dark: #61183F;
  --secondary-main: #88304E;
  --secondary-light: #B75E74;
  --secondary-lighter: #DB8692;
  --secondary-lightest1: #F3B4B7;
  --secondary-lightest2: #F9DAD8;
`;

export default coolTheme;
