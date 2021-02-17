import "../scripts/wdyr";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OptionButtonsContainer from "./optionsButtons/optionButtonsContainer";
import store from "../store/store";
import appTheme from "../styles/appTheme";

// Persistent Layout
const Layout = ({ children }) => {
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
          {children}
          <Footer />
        </ReduxProvider>
      </NextThemeProvider>
    </EmotionThemeProvider>
  );
};

export default Layout;
