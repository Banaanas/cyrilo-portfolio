import { css } from "@emotion/react";

const globalColors = css`
  /* Gray */
  --color-gray-darker: hsl(210, 4%, 40%);
  --color-gray-dark: hsl(210, 6%, 59%);
  --color-gray-default: hsl(212, 14%, 79%);
  --color-gray-light: hsl(210, 15%, 89%);
  --color-gray-lighter: hsl(220, 11%, 95%);
  --color-gray-lightest-1: hsl(240, 9%, 98%);
  --color-gray-lightest-2: hsl(240, 20%, 99%);

  /* Black */
  --color-black-default: hsl(216, 18%, 16%);

  /* White */
  --color-white-default: hsl(0, 0%, 100%);

  /* Text Color */
  --color-text-default: hsl(222deg, 22%, 5%);
`;

export default globalColors;
