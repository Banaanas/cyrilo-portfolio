import "../scripts/wdyr";
import "../styles/normalize.css";
import { useEffect, useState } from "react/";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import store from "../store/store";
import GlobalStyles from "../styles/GlobalStyles";
import appTheme from "../styles/appTheme";
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
  const [themeNumber, setThemeNumber] = useLocalStorage("themeNumber", "4");
  const [themeIndex, setThemeThemeIndex] = useState(0);

  const themesArray = [appTheme, appTheme2, appTheme3, appTheme4, appTheme5];

  useEffect(() => {
    setThemeThemeIndex(themeNumber);
  }, [themeNumber]);

  const toggleThemeColors = () => {
    let newThemeIndex = themeIndex + 1;
    if (newThemeIndex >= 4) {
      newThemeIndex = 0;
    }

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
