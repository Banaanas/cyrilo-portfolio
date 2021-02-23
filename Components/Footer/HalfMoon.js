import styled from "@emotion/styled";

//* ** Half Moon Shape for Footer ***//

const StyledSVG = styled.svg`
  position: absolute; /* Page Bottom */
  bottom: 0;
  z-index: -1;
  width: 100%;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 6rem; /* 3 Rectangles Shades (2rem) */
  transform: scaleY(-1); /* Vertical flip */
`;

const HalfMoon = () => (
  <StyledSVG
    width="1440"
    height="180"
    viewBox="0 0 1440 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <mask
      id="mask-HalfMoon-Footer"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="1440"
      height="180"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1440 0H0V120C-8.26597e-06 127.879 18.6233 135.681 54.8067 142.961C90.9901 150.241 144.025 156.855 210.883 162.426C277.741 167.998 357.113 172.417 444.468 175.433C531.822 178.448 625.448 180 720 180C814.552 180 908.178 178.448 995.532 175.433C1082.89 172.417 1162.26 167.998 1229.12 162.426C1295.98 156.855 1349.01 150.241 1385.19 142.961C1421.38 135.681 1440 127.879 1440 120V0Z"
        fill="#f00"
      />
    </mask>
    <g mask="url(#mask-HalfMoon-Footer)">
      <rect width="1440" height="60" fill="var(--footer-halfmoon-shade-1)" />
      <rect
        y="60"
        width="1440"
        height="60"
        fill="var(--footer-halfmoon-shade-2)"
      />
      <rect
        y="120"
        width="1440"
        height="60"
        fill="var(--footer-halfmoon-shade-3)"
      />
    </g>
  </StyledSVG>
);

export default HalfMoon;
