import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ContextProviders from "@/context";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {

  return (
      
      <>
        <NextNProgress startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <ContextProviders>
        <Component {...pageProps} />
        </ContextProviders>
      </>

  )
}
