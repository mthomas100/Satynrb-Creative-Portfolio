import React from 'react';
import 'jquery/dist/jquery.min.js';
import Layout from './src/components/Layout';

// Import all js dependencies.

export function wrapPageElement({ element, props }) {
  return (
    <>
      <Layout {...props}>{element}</Layout>
    </>
  );
}
