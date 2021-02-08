import "../scripts/wdyr";
import "../styles/normalize.css";
import { useEffect, useState } from "react/";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import store from "../store/store";
import GlobalStyles from "../styles/GlobalStyles";
import appTheme from "../styles/appTheme";
import appDarkTheme from "../styles/appDarkTheme";
import appTheme2 from "../styles/appTheme-2";
import appTheme3 from "../styles/appTheme-3";
import appTheme4 from "../styles/appTheme-4";
import appTheme5 from "../styles/appTheme-5";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ChangeThemeButton from "../Components/Dividers/ChangeThemeButton";
import useLocalStorage from "../custom-hooks/useLocalStorage";

const App = ({ Component, pageProps }) => {
  // SIDE MENU - REDUX STATE
  const [themeNumber, setThemeNumber] = useLocalStorage("themeNumber", "0");
  const [themeIndex, setThemeThemeIndex] = useState(0);

  const themesArray = [
    appTheme,
    appDarkTheme,
    appTheme2,
    appTheme3,
    appTheme4,
    appTheme5,
  ];

  const getUserSetPreference = () => {
    return JSON.parse(localStorage.getItem("themeNumber"));
  };

  const getMediaQueryPreference = () => {
    // If SSR, Return (because Window is NOT defined on the Node.js Server)
    if (typeof window === "undefined") return;

    // Define if User has a Dark Mode Preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    // eslint-disable-next-line consistent-return
    return prefersDarkMode;
  };

  useEffect(() => {
    const userPreference = getUserSetPreference();
    const isDarkMode = getMediaQueryPreference();
    console.log(isDarkMode);
    if (userPreference === null && isDarkMode) {
      setThemeThemeIndex(1);
      setThemeNumber(1);
    }
    if (userPreference) {
      setThemeThemeIndex(userPreference);
      setThemeNumber(userPreference);
    }
  }, [setThemeNumber]);

  const toggleThemeColors = () => {
    let newThemeIndex = themeIndex + 1;
    if (newThemeIndex === 6) {
      newThemeIndex = 0;
    }
    // Convert String to Number
    newThemeIndex = Number(newThemeIndex);

    setThemeThemeIndex(newThemeIndex);
    setThemeNumber(newThemeIndex);
  };

  return (
    <ThemeProvider theme={themesArray[themeIndex]}>
      <Provider store={store}>
        <GlobalStyles />
        <ChangeThemeButton toggleFunction={toggleThemeColors} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
