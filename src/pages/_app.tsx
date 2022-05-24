import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";
import Script from 'next/script';

function Main({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cloud Icons</title>
        <link rel="shortcut icon" href="/cloud-icons.svg" />
      </Head>
      <Script src="https://cdn.splitbee.io/sb.js"></Script>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default Main
