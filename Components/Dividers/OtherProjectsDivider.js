import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";
import StyledDividerContainer from "../StyledComponents/StyledDividerContainer";

const HeroBannerDivider = () => {
  return (
    <StyledDividerContainer>
      <svg
        width="1440"
        height="256"
        viewBox="0 0 1440 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M5.72205e-05 35.0523L60.0001 31.1795C120 27.3067 240 19.561 360 35.0523C480 50.5436 600 89.2718 720 77.6533C840 66.0349 960 4.06974 1080 0.196918C1200 -3.6759 1320 50.5436 1380 77.6533L1440 104.763V128H1380C1320 128 1200 128 1080 128C960 128 840 128 720 128C600 128 480 128 360 128C240 128 120 128 60.0001 128H5.72205e-05V35.0523Z"
          fill={appTheme.colors.secondary.main}
        />
        <path
          d="M1440 220.948L1380 224.821C1320 228.693 1200 236.439 1080 220.948C960 205.456 840 166.728 720 178.347C600 189.965 480 251.93 360 255.803C240 259.676 120 205.456 60 178.347L0 151.237L5.72205e-05 128H60.0001C120 128 240 128 360 128C480 128 600 128 720 128C840 128 960 128 1080 128C1200 128 1320 128 1380 128H1440L1440 220.948Z"
          fill={appTheme.colors.secondary.main}
        />
      </svg>
    </StyledDividerContainer>
  );
};

export default HeroBannerDivider;
