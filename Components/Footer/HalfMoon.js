import styled from "@emotion/styled";

//* ** Half Moon Shape for Footer ***//

const StyledSVG = styled.svg`
  position: absolute; /* Page Bottom */
  bottom: 0;
  z-index: -1;
  width: 100%;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 8rem;
  transform: scaleY(-1); /* Vertical flip */
`;

const HalfMoon = () => {
  return (
    <StyledSVG
      width="1440"
      height="240"
      viewBox="0 0 1440 240"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1440"
        height="240"
      >
        <path d="M1440 0H0V160C0 170.506 18.623 180.909 54.8066 190.615C90.9902 200.321 144.025 209.14 210.883 216.568C277.741 223.997 357.113 229.89 444.468 233.91C531.822 237.931 625.448 240 720 240C814.552 240 908.178 237.931 995.532 233.91C1082.89 229.89 1162.26 223.997 1229.12 216.569C1295.97 209.14 1349.01 200.321 1385.19 190.615C1421.38 180.909 1440 170.506 1440 160V0Z" />
      </mask>
      <g mask="url(#mask0)">
        <rect width="1440" height="60" fill="var(--secondary-dark)" />

        <rect y="60" width="1440" height="60" fill="var(--secondary-main)" />
        <rect y="120" width="1440" height="60" fill="var(--secondary-light)" />
        <rect
          y="180"
          width="1440"
          height="60"
          fill="var(--secondary-lighter)"
        />
      </g>
    </StyledSVG>
  );
};

export default HalfMoon;
