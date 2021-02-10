import "../scripts/wdyr";
import "../styles/normalize.css";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import store from "../store/store";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ChangeColorsThemeButton from "../Components/Dividers/ChangeColorsThemeButton";
import appTheme from "../styles/appTheme";

const App = ({ Component, pageProps }) => {
  return (
    <EmotionThemeProvider theme={appTheme}>
      <NextThemeProvider /* Cf. -> Note 1 - Flash */
        attribute="class"
        /* defaultTheme="system" */
        enableSystem={false}
        themes={["light", "dark", "cool"]}
      >
        <ReduxProvider store={store}>
          <GlobalStyles />
          <ChangeColorsThemeButton />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ReduxProvider>
      </NextThemeProvider>
    </EmotionThemeProvider>
  );
};

export default App;
