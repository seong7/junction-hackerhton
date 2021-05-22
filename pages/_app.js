import React from 'react';
import Head from 'next/head';
import { GlobalStyle } from '../src/styled/GlobalStyle';
import BusProvider from '../src/context/busContext/BusContext';

import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/sign-up.css';
import '../src/styles/font-family.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
        <title>OurBus</title>
      </Head>
      <GlobalStyle />
      <BusProvider>
        <Component {...pageProps} />
      </BusProvider>
    </>
  );
}

export default App;
