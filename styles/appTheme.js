const appTheme = {
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xl2: "24px",
    xl3: "30px",
    xl4: "36px",
    xl5: "48px",
    xl6: "60px",
    xl7: "72px",
    xl8: "96px",
    xl9: "128px"
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    heroBannerSection1: "380px",
    heroBannerSection2: "750px",
  },
  globalMinWidth: "320px",
  globalMaxWidth: "1100px",
  letterSpacing: {
    heroBanner: "2px"
  },
  transitions: {
    themeColors: "background-color 500ms ease" /* Global Background */,
    svgFill:
      "fill 500ms ease;" /* Section Dividers / StyledDividerContainer.js */,
  },
};

export default appTheme;
