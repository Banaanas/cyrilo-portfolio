import "../scripts/wdyr";
import "../styles/normalize.css";
import { useEffect, useState } from "react/";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import store from "../store/store";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ChangeColorsThemeButton from "../Components/Dividers/ChangeColorsThemeButton";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import appThemesArray from "../styles/appThemesArray";

const App = ({ Component, pageProps }) => {
  // Set localStorage - useLocalStorage - Custom Hook
  // Initial localStorage value to 0
  const [themeLocalStorage, setThemeLocalStorage] = useLocalStorage(
    "themeNumber",
    "0",
  );
  const [themeIndex, setThemeThemeIndex] = useState(0);

  useEffect(() => {
    // If SSR, Return (because Window is NOT defined on the Node.js Server)
    if (typeof window === "undefined") return;

    // Define if User has a Dark Mode Preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    // Define if User has already toggled a Color Theme (localStorage)
    const userPreference = themeLocalStorage;

    // Browser set to DARK MODE preference but User did NOT already toggle any Colors Theme
    // Then chosen Theme is the (last) one toggled
    if (prefersDarkMode && userPreference === null) {
      setThemeThemeIndex(1);
      setThemeLocalStorage(1);
    }

    // User HAS already toggled a Colors Theme
    // Then chosen Theme is the (last) one toggled (localStorage)
    if (userPreference) {
      setThemeThemeIndex(userPreference);
      setThemeLocalStorage(userPreference);
    }
  }, [themeLocalStorage, setThemeLocalStorage]);

  //
  const changeThemeColors = () => {
    let newThemeIndex = themeIndex + 1;
    if (newThemeIndex >= appThemesArray.length) {
      newThemeIndex = 0;
    }

    // Convert String to Number
    newThemeIndex = Number(newThemeIndex);

    // Set new Colors Theme to localStorage
    setThemeLocalStorage(newThemeIndex);
    setThemeThemeIndex(newThemeIndex);
  };

  return (
    <ThemeProvider theme={appThemesArray[themeIndex]}>
      <Provider store={store}>
        <GlobalStyles />
        <ChangeColorsThemeButton
          changeThemeFunction={changeThemeColors}
          themeIndex={themeLocalStorage}
        />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
