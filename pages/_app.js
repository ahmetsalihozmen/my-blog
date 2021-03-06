import '../styles/globals.css'
import 'tachyons'
import React from 'react';
import 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
