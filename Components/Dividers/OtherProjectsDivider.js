import SVGDivider from "../StyledComponents/StyledDividerSVG";
import appTheme from "../../styles/appTheme";

const HeroBannerDivider = () => {
  return (
    <SVGDivider
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
        d="M1150 35.5556L1200 42.6667V128V213.333L1150 220.444C1100 227.556 1000 241.778 900 248.889C800 256 700 256 600 241.778C566.667 237.037 533.333 230.716 500 224.395C433.333 211.753 366.667 199.111 300 199.111C200 199.111 100 227.556 50 241.778L0 256V128V0L50 14.2222C100 28.4444 200 56.8889 300 56.8889C366.667 56.8889 433.333 44.2469 500 31.6049C533.333 25.284 566.667 18.963 600 14.2222C700 0 800 0 900 7.11111C1000 14.2222 1100 28.4444 1150 35.5556Z"
        fill={appTheme.colors.secondary.default}
      />
    </SVGDivider>
  );
};

export default HeroBannerDivider;
