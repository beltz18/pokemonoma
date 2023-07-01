import '@s/_index.min.scss'
import Head from 'next/head'
import type {
  AppProps,
} from 'next/app'
import {
  Raleway
} from 'next/font/google'

const raleway = Raleway({ subsets:['latin'], weight:['300','400','500','600','700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`:root { --raleway: ${raleway.style.fontFamily}; }`}
      </style>
      <Head>
        <title>Pokemonoma</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}