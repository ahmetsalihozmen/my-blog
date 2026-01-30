import React from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../src/components/navbar';
import theme from '../src/components/theme';
import { LanguageProvider } from '../src/context/LanguageContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </LanguageProvider>
    </RecoilRoot>
  );
}

export default MyApp;
