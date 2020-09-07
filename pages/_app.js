import React from 'react'
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head key="app">
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"/>
      </Head>
        <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp
