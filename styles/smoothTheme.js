import { css } from "@emotion/react";

const smoothTheme = css`
  /* General Elements */
  --global-background-color: #fffffe;
  --styled-title-color: var(--primary-darker);

  /* HeroBanner Section */
  --cyril-h2: var(--primary-main);

  /* HeroBanner Section - Located in the HalfMoon Shape - Responsive */
  --cyril-h2-responsive: var(--primary-main);
  --cyril-h2-responsive-text-stroke: 0.5px var(--secondary-darker);
  --cyril-h2-responsive-text-shadow: 0 0 3px var(--secondary-darker);

  /* Project Card */
  --projects-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.12);

  /* Featured Projects */
  --featured-projects-background: var(--secondary-dark);
  --featured-projects-name: var(--primary-main);
  --featured-projects-software-stack: var(--default-white);
  --featured-projects-links-color: var(--default-white);
  --featured-projects-links-background-color: var(--secondary-dark);

  /* Other Projects - nth-of-type(odd) */
  --other-projects-background-odd: var(--primary-main);
  --other-projects-name-odd: var(--secondary-darker);
  --other-projects-software-stack-odd: var(--secondary-main);
  --other-projects-links-color-odd: var(--secondary-darker);
  --other-projects-links-background-color-odd: var(--primary-main);

  /* Other Projects - nth-of-type(even) */
  --other-projects-background-even: var(--secondary-main);
  --other-projects-name-even: var(--primary-darker);
  --other-projects-software-stack-even: var(--default-white);
  --other-projects-links-color-even: var(--primary-darker);
  --other-projects-links-background-color-even: var(--secondary-main);

  /* Short Story */
  --short-story-name: var(--secondary-dark);

  /* Default Colors */
  --default-white: #fbf9fa;

  /* Primary Color */

  --primary-darker: #72234D;
  --primary-dark: #AB5E78;
  --primary-main: #EEBBC3;
  --primary-light: #F4CDCF;
  --primary-lighter: #F9DAD9;
  --primary-lightest1: #FDEAE7;
  --primary-lightest2: #FEF5F3;

  /* Secondary Color */
  --secondary-darker: #060921;
  --secondary-dark: #111632;
  --secondary-main: #232946;
  --secondary-light: #596490;
  --secondary-lighter: #8B98C7;
  --secondary-lightest1: #BDC7EC;
  --secondary-lightest2: #DDE3F5;
`;

export default smoothTheme;
