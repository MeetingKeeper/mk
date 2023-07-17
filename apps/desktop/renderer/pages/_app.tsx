import React from 'react';
import type { AppProps } from 'next/app';

import '@pm/styles/globals.css';
import '@pm/styles/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/Layouts';

import Error from './_error';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
