import React from 'react';
import Layout from './src/components/Layout';

// Import all js dependencies.

import 'jquery/dist/jquery.min.js';

export function wrapPageElement({ element, props }) {
  return (
    <>
      <Layout {...props}>{element}</Layout>
    </>
  );
}
