import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Satyn Portfolio`,
    siteUrl: 'https://satynrb.com',
    description: 'Satyn Portfolio',
    twitter: '@satynrb',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-netlify-cache',
  ],
};
