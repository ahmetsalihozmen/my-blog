import '../styles/globals.css'
import 'tachyons'
import React from 'react';
import 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
}

export default MyApp
