const appTheme = {
  colors: {
    primary: {
      darker: "var(--color-primary-darker)",
      dark: "var(--color-primary-dark)",
      default: "var(--color-primary-default)",
      light: "var(--color-primary-light)",
      lighter: "var(--color-primary-lighter)",
      lightest1: "var(--color-primary-lightest-1)",
      lightest2: "var(--color-primary-lightest-2)"
    },

    secondary: {
      darker: "var(--color-secondary-darker)",
      dark: "var(--color-secondary-dark)",
      default: "var(--color-secondary-default)",
      light: "var(--color-secondary-light)",
      lighter: "var(--color-secondary-lighter)",
      lightest1: "var(--color-secondary-lightest-1)",
      lightest2: "var(--color-secondary-lightest-2)"
    },

    tertiary: {
      default: "var(--color-tertiary-default)"
    },

    /* Global Background */
    globalBackgroundColor: "var(--global-background-color)",

    /* Header - HalfMoon */
    headerHalfMoonShade1: "var(--header-halfmoon-shade-1)",
    headerHalfMoonShade2: "var(--header-halfmoon-shade-2)",
    headerHalfMoonShade3: "var(--header-halfmoon-shade-3)",

    /* Footer - HalfMoon */
    footerHalfMoonShade1: "var(--footer-halfmoon-shade-1)",
    footerHalfMoonShade2: "var(--footer-halfmoon-shade-2)",
    footerHalfMoonShade3: "var(--footer-halfmoon-shade-3)",

    /* CyriLogo */
    cyrilLogoColor1: "var(--cyrilogo-color-1)",
    cyrilLogoColor2: "var(--cyrilogo-color-2)",

    /* Section Title */
    styledTitle: "var(--styled-title-color)",

    /* Action Button */
    actionButtonBackground: "var(--action-button-background)",
    actionButtonColor: "var(--action-button-color)",
    actionButtonIconColor: "var(--action-button-icon-color)",

    /* Burger Button */
    burgerOpenColor: "var(--burger-open-color)",
    burgerCloseColor: "var(--burger-close-color)",

    /* Change Theme Button - Colors symbolizing those Theme Colors */
    changeThemeButtonColor: "var(--change-theme-button-color)",
    changeThemeButtonBackground: "var(--change-theme-button-background)",

    /* Change Theme Button - Colors symbolizing those Theme Colors */
    changeLanguageButtonColor: "var(--change-language-button-color)",
    changeLanguageButtonBackground: "var(--change-language-button-background)",

    /* Planet Cyril - Drawing */
    planetCyril: "var(--planet-Cyril)",
    planetCyrilStarsLight: "var(--planet-Cyril-stars-light-shade)",
    planetCyrilStarsDark: "var(--planet-Cyril-stars-dark-shade)",

    /* Featured Projects */
    featuredProjectsBackground: "var(--featured-projects-background)",
    featuredProjectsName: "var(--featured-projects-name)",
    featuredProjectsSoftwareStack: "var(--featured-projects-software-stack)",
    featuredProjectsLinksColor: "var(--featured-projects-links-color)",
    featuredProjectsLinksBackground:
      "var(--featured-projects-links-background-color)",

    /* Other Projects - nth-of-type(odd) */
    otherProjectsBackgroundOdd: "var(--other-projects-background-odd)",
    otherProjectsNameOdd: "var(--other-projects-name-odd)",
    otherProjectsSoftwareStackOdd: "var(--other-projects-software-stack-odd)",
    otherProjectsLinksColorOdd: "var(--other-projects-links-color-odd)",
    otherProjectsLinksBackgroundColorOdd:
      "var(--other-projects-links-background-color-odd)",

    /* Other Projects - nth-of-type(even) */
    otherProjectsBackgroundEven: "var(--other-projects-background-even)",
    otherProjectsNameEven: "var(--other-projects-name-even)",
    otherProjectsSoftwareStackEven: "var(--other-projects-software-stack-even)",
    otherProjectsLinksColorEven: "var(--other-projects-links-color-even)",
    otherProjectsLinksBackgroundColorEven:
      "var(--other-projects-links-background-color-even)",

    /* About Me Section - Short Story */
    shortStoryStrong: "var(--short-story-strong)",

    /* Contact Section */
    principalQuestion: "var(--principal-question)",
    subsidiaryQuestions: "var(--subsidiary-questions)",
    cyriloMailLetters: "var(--cyrilo-mail-letters)",
    cyriloMailLine: "var(--cyrilo-mail-line)",
    githubLinkedInBackground: "var(--github-linkedin-background)",

    /* 404 Page */
    h1Color404: "var(--404-h1-color)",
    rLetter404: "var(--404-r-letter)",

    /* Global Colors */
    black: "var(--color-black-default)",
    white: "var(--color-white-default)",
    textDefault: "var(--color-text-default)",
    selection: "var(--color-selection-background)",
    selectionBackground: "var(--color-selection-background)"
  },

  elevation: {
    sm: "var(--elevation-1)",
    md: "var(--elevation-2)",
    lg: "var(--elevation-3)",
    xl: "var(--elevation-4)",
    projectCard: "var(--elevation-project-card)",

    /* SideMenu Navbar Text Shadow */
    sideMenuNavBarTextShadow: "var(--sidemenu-navbar-text-shadow)"
  },

  fontWeight: {
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)",
    bold: "var(--font-weight-bold)"
  },

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

  fontFamily: {
    nexaBlack: "var(--nexa-black)",
    nexaBold: "var(--nexa-bold)",
    nexaRegular: "var(--nexa-regular)",
    nexaThin: "var(--nexa-thin)",
    nexaThinItalic: "var(--nexa-thin-italic)",
    alternativeFonts: "var(--alternative-fonts)"
  },

  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    heroBannerSection1: "380px",
    heroBannerSection2: "750px"
  },

  /* OTHERS */
  globalMinWidth: "320px",
  globalMaxWidth: "1100px",
  burgerSpanWidth: "40px",
  letterSpacing: {
    heroBanner: "2px"
  },
  transitions: {
    themeColors: "background-color 500ms ease" /* Global Background */,
    svgFill:
      "fill 500ms ease;" /* Section Dividers / StyledDividerContainer.js */
  }
};

export default appTheme;
