import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

//* ** Half Moon Shape for Footer ***//

const StyledDiv = styled.div`
  position: relative;
  z-index: -1;
  width: 100vw;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  transform: scaleY(-1); /* Vertical flip */

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const HalfMoon = () => {
  return (
    <StyledDiv>
      <svg
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
          <rect
            width="1440"
            height="60"
            fill={appTheme.colors.secondary.dark}
          />

          <rect
            y="60"
            width="1440"
            height="60"
            fill={appTheme.colors.secondary.main}
          />
          <rect
            y="120"
            width="1440"
            height="60"
            fill={appTheme.colors.secondary.light}
          />
          <rect
            y="180"
            width="1440"
            height="60"
            fill={appTheme.colors.secondary.lighter}
          />
        </g>
      </svg>
    </StyledDiv>
  );
};

export default HalfMoon;
