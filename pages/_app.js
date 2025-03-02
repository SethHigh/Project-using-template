import Head from 'next/head' //use instead of head
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Gif Collector</title>
          <meta name="description" content="Find Yourself Some Gifs" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <GlobalStyle />

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}
