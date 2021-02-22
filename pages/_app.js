import "../styles/normalize.css"; // Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Layout from "../Components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
};

export default App;
