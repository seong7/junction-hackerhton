import React from 'react';
import Head from 'next/head';
import { GlobalStyle } from '../src/styled/GlobalStyle';

import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/sign-up.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
