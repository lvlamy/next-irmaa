import '@/styles/globals.css';
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Irmaa</title>
      </Head>

      <Script
        src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"
        crossOrigin="anonymous"
      />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>

      <Script src="js/scripts.js"></Script>

      <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></Script>

      <Component {...pageProps} />
    </>
  );
}
