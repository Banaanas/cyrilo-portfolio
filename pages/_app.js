import "../styles/normalize.css"; // Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
import { AnimatePresence } from "framer-motion";
import Layout from "../Components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
};

export default App;
