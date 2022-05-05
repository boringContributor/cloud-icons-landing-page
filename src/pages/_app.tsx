import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";

function Main({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cloud Icons</title>
        <link rel="shortcut icon" href="/cloud-icons.svg" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default Main
