import Head from 'next/head' //use instead of head
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * 
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
