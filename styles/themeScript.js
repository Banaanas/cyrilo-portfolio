function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem("themeNumber");
    const hasPreference = typeof preference === "string";

    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (hasPreference) {
      return preference;
    }

    // If there is no saved preference, use a media query
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);


    const hasPreference = typeof mql.matches === "boolean";
    if (hasPreference) {
      return mql.matches ? "dark" : "light";
    }

    // default to 'light'.
    return "light";
  }

  const colorMode = getInitialColorMode();
}
