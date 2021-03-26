import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  /* lang="en" */
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="./images/favicons/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./images/favicons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./images/favicons/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./images/favicons/apple-touch-icon.png"
          />
          <link
            rel="mask-icon"
            href="../public/images/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="manifest" href="./images/favicons/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
