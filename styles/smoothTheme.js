import { css } from "@emotion/react";

const smoothTheme = css`
  /* General Elements */
  --global-background-color: #ffffd2;
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

  --primary-darker: #204470;
  --primary-dark: #5486A8;
  --primary-main: #A8D8EA;
  --primary-light: #BFE7F2;
  --primary-lighter: #CEF3F8;
  --primary-lightest1: #E0FBFC;
  --primary-lightest2: #EFFDFD;

  /* Secondary Color */
  --secondary-darker: #291C68;
  --secondary-dark: #5E4B9C;
  --secondary-main: #AA96DA;
  --secondary-light: #C4B2E8;
  --secondary-lighter: #D6C6F3;
  --secondary-lightest1: #E8DBFB;
  --secondary-lightest2: #F3EDFD;
`;

export default smoothTheme;
