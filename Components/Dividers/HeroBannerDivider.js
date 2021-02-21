import StyledDividerSVG from "../StyledComponents/StyledDividerSVG";

const HeroBannerDivider = () => {
  return (
    <StyledDividerSVG
      width="1200"
      height="256"
      viewBox="0 0 1200 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 49.7778L0 42.6667V128V256H50C100 256 200 256 300 246.519C366.667 240.198 433.333 229.663 500 219.128C533.333 213.86 566.667 208.593 600 203.852C700 189.63 800 180.148 900 182.519C1000 184.889 1100 199.111 1150 206.222L1200 213.333V128V0H1150C1100 0 1000 0 900 9.48148C833.333 15.8025 766.667 26.3374 700 36.8724C666.667 42.1399 633.333 47.4074 600 52.1481C500 66.3704 400 75.8519 300 73.4815C200 71.1111 100 56.8889 50 49.7778L50 49.7778Z"
        fill="var(--secondary-main)"
      />
    </StyledDividerSVG>
  );
};

export default HeroBannerDivider;
