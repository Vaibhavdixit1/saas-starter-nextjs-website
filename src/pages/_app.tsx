import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Orbit — The Operating System for Modern Teams</title>
        <meta
          name="description"
          content="Collaborate, ship, and scale your projects with Orbit. The all-in-one platform for high-performance engineering teams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
