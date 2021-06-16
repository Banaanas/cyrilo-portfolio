import "../styles/normalize.css"; // Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Layout from "../Components/Layout";

const App = ({ Component, pageProps }) => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <DefaultSeo {...SEO} />
    <AnimatePresence initial={false} exitBeforeEnter>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AnimatePresence>
  </Layout>
);

export default App;
