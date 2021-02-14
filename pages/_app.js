import "../scripts/wdyr";
import "../styles/normalize.css";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import store from "../store/store";
import appTheme from "../styles/appTheme";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import OptionButtonsContainer from "../Components/optionsButtons/optionButtonsContainer";

const App = ({ Component, pageProps, router }) => {
  return (
    <EmotionThemeProvider theme={appTheme}>
      <NextThemeProvider /* Cf. -> Note 1 - Flash */
        attribute="class"
        enableSystem={false}
        themes={["light", "dark", "smooth", "cool"]}
      >
        <ReduxProvider store={store}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <div key={router.path}>
              <GlobalStyles />
              <OptionButtonsContainer />
              <Header />
              <Component {...pageProps} />
              <Footer />
            </div>
          </AnimatePresence>
        </ReduxProvider>
      </NextThemeProvider>
    </EmotionThemeProvider>
  );
};

export default App;
