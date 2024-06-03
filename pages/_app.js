import 'tachyons'
import React from 'react';
import 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../src/components/navbar';
import theme from '../src/components/theme';

function MyApp({ Component, pageProps }) {
  return <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
}

export default MyApp
