import appTheme from "../../styles/appTheme";
import StyledDividerContainer from "../StyledComponents/StyledDividerContainer";

const HeroBannerDivider = () => {
  return (
    <StyledDividerContainer>
      <svg
        width="1440"
        height="257"
        viewBox="0 0 1440 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 230.998L60 219.241C120 207.889 240 184.375 360 181.537C480 178.699 600 196.132 720 213.565C840 230.998 960 248.43 1080 254.511C1200 260.187 1320 254.511 1380 251.674L1440 248.43V125.996H1380C1320 125.996 1200 125.996 1080 125.996C960 125.996 840 125.996 720 125.996C600 125.996 480 125.996 360 125.996C240 125.996 120 125.996 60 125.996H0V230.998Z"
          fill={appTheme.colors.secondary.main}
        />
        <path
          d="M1440 26.8824L1380 38.6393C1320 49.9908 1200 73.5047 1080 76.3426C960 79.1805 840 61.7478 720 44.3151C600 26.8824 480 9.44965 360 3.36847C240 -2.30729 120 3.36848 60 6.20636L0 9.44965V131.884H60C120 131.884 240 131.884 360 131.884C480 131.884 603.4 132.077 723.4 132.077C843.4 132.077 960 131.884 1080 131.884C1200 131.884 1320 131.884 1380 131.884H1440V26.8824Z"
          fill={appTheme.colors.secondary.main}
        />
      </svg>
    </StyledDividerContainer>
  );
};

export default HeroBannerDivider;
