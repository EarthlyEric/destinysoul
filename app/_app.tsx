import type { AppProps } from 'next/app'

function DSApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default DSApp