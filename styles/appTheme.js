const appTheme = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xl2: "1.5rem",
    xl3: "1.875rem",
    xl4: "2.25rem",
    xl5: "3rem",
    xl6: "3.75rem",
    xl7: "4.5rem",
    xl8: "6rem",
    xl9: "8rem",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    heroBannerSection: "750px",
  },
  globalMinWidth: "320px",
  globalMaxWidth: "1100px",
  transitions: {
    themeColors: "background-color 500ms ease" /* Global Background */,
    svgFill:
      "fill 500ms ease;" /* Section Dividers / StyledDividerContainer.js */,
  },
};

export default appTheme;
