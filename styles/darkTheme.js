import { css } from "@emotion/react";

const darkTheme = css`
  /* Elements Colors */
  --global-background-color: #0f1021;
  --styled-title-color: #ffe227;
  --featured-projects-background: #411650;
  --featured-projects-name: #ffe227;
  --featured-projects-shadow: 0 16px 24px 0 rgba(255, 226, 39, 0.12);
  --other-projects-background-odd: #ffe227;
  --other-projects-background-even: #6a2c70;
  --other-projects-name-odd: #6a2c70;
  --other-projects-name-even: #ffe227;
  --short-story-name: #220835;

  /* Default Colors */
  --default-white: #fbf9fa;

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
