import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import 'normalize.css';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';
import GlobalStyles from '../styles/GlobalStyles';

const SiteBorderStyles = styled.div`
  max-width: 100%;
  /* margin: 12rem auto 4rem auto; */
  /* margin-top: clamp(2rem, 10vw, 12rem); */
  /* background: white url(${stripes}); */
  background-size: 1500px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  /* padding: 2em; */
`;

export default function Layout({ children }) {
  // console.log(children);
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Header />
          {children}
          {/* <Footer /> */}
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
