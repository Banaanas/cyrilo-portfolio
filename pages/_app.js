import "../scripts/wdyr";
import "../styles/normalize.css";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import store from "../store/store";
import appTheme from "../styles/appTheme";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import OptionButtonsContainer from "../Components/optionsButtons/optionButtonsContainer";

const App = ({ Component, pageProps }) => {
  return (
    <EmotionThemeProvider theme={appTheme}>
      <NextThemeProvider /* Cf. -> Note 1 - Flash */
        attribute="class"
        enableSystem={false}
        themes={["light", "dark", "smooth", "cool"]}
      >
        <ReduxProvider store={store}>
          <GlobalStyles />
          <OptionButtonsContainer />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ReduxProvider>
      </NextThemeProvider>
    </EmotionThemeProvider>
  );
};

export default App;
