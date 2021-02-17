import "../scripts/wdyr";
import "../styles/normalize.css"; // Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
import Layout from "../Components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
