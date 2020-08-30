import '../styles/index.css'
import "aos/dist/aos.css";

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>tsfresh - Extract Features on Time Series Easily</title>
    </Head>
    <Component {...pageProps} />
    </>
  );
}