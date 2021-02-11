import StyledDividerContainer from "../StyledComponents/StyledDividerContainer";

const AboutMeDivider = () => {
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
          d="M0 71.0745L60 66.4679C120 61.5321 240 52.3188 360 56.9254C480 61.5321 600 80.617 720 82.9203C840 85.2237 960 71.0746 1080 54.6221C1200 37.8406 1320 19.0848 1380 9.54242L1440 0V128H1380C1320 128 1200 128 1080 128C960 128 840 128 720 128C600 128 480 128 360 128C240 128 120 128 60 128H0V71.0745Z"
          fill="var(--primary-main)"
        />
        <path
          d="M1440 184.925L1380 189.532C1320 194.468 1200 203.681 1080 199.075C960 194.468 840 175.383 720 173.08C600 170.776 480 184.925 360 201.378C240 218.159 120 236.915 60 246.458L0 256V128H60C120 128 240 128 360 128C480 128 600 128 720 128C840 128 960 128 1080 128C1200 128 1320 128 1380 128H1440V184.925Z"
          fill="var(--primary-main)"
        />
      </svg>
    </StyledDividerContainer>
  );
};

export default AboutMeDivider;
