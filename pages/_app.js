import "../scripts/wdyr";
import "../styles/normalize.css";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";
import appTheme from "../styles/appTheme";
import store from "../store/store";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </ThemeProvider>
);

export default App;
