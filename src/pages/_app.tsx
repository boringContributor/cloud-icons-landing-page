import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/global.css";
function Main({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cloud Icons</title>
        <link rel="shortcut icon" href="/cloud-icons.svg" />
      </Head>
      <Script src="https://cdn.splitbee.io/sb.js"></Script>

      <Component {...pageProps} />
    </>
  );
}

export default Main;
