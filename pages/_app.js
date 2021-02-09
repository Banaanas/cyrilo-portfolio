import "../scripts/wdyr";
import "../styles/normalize.css";
import { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import store from "../store/store";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ChangeColorsThemeButton from "../Components/Dividers/ChangeColorsThemeButton";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import appThemesArray from "../styles/appThemesArray";

const App = ({ Component, pageProps }) => {
  // Cf. Note 1 - Flash
  // Set localStorage - useLocalStorage - Custom Hook
  // setThemeLocalStorage : set Theme Number into localStorage
  // Initial localStorage value to 0
  // Initial Value is NOT set to localStorage
  const [themeLocalStorage, setThemeLocalStorage] = useLocalStorage(
    "themeNumber",
    "0",
  );

  // Theme Index - useState
  const [themeIndex, setThemeThemeIndex] = useState(0);

  /*// useEffect
  useEffect(() => {
    // If SSR, Return (because Window is NOT defined on the Node.js Server)
    if (typeof window === "undefined") return;

    // Define if User has a Dark Mode Preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    // Define if User has already toggled a Color Theme (localStorage)
    const userPreference = themeLocalStorage;

    // Browser set to DARK MODE preference but User did NOT already toggle any Colors Theme
    // Then chosen Theme is the Dark Theme (index 1 in appThemesArray)
    if (prefersDarkMode && userPreference === null) {
      setThemeThemeIndex(1);
      setThemeLocalStorage(1);
    }

    // User HAS already toggled a Colors Theme
    // Then chosen Theme is the (last) one toggled ( Index retrieved from localStorage)
    if (userPreference) {
      setThemeThemeIndex(userPreference);
      setThemeLocalStorage(userPreference);
    }
  }, [themeLocalStorage, setThemeLocalStorage]);*/

  // Toggle between Colors Themes
  const changeColorsTheme = () => {
    let newThemeIndex = themeIndex + 1;

    // Set new Index to 0 if the previous one corresponds to the last Theme in array
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
    <NextThemeProvider
      attribute="class"
      /* defaultTheme="system" */
      enableSystem={false}
      themes={["light", "dark", "cool"]}
    >
      <EmotionThemeProvider theme={appThemesArray[themeIndex]}>
        <ReduxProvider store={store}>
          <GlobalStyles />
          <ChangeColorsThemeButton
            changeThemeFunction={changeColorsTheme}
            themeIndex={themeLocalStorage}
          />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ReduxProvider>
      </EmotionThemeProvider>
    </NextThemeProvider>
  );
};

export default App;
