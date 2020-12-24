import { graphql } from 'gatsby';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { images } from './images';

const AboutStyles = styled.div`
  * {
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  h1 {
    display: block;
    font-size: 17vw;
    font-family: Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: bolder;
    color: #f40046;
    position: fixed;
    top: -15vw;
    left: 50%;
    transform: translateX(-50%);
    line-height: 13vw;
    letter-spacing: -0.5rem;
  }

  .container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    perspective: 1200px;
    padding-top: 15vh;
    padding-bottom: 15vh;
  }

  .image-container {
    position: relative;
    margin-bottom: 50px;
    z-index: 1;
  }

  .overlay {
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    position: absolute;
  }

  img {
    max-width: 100%;
    transform: translateZ(0);
  }

  .blueBox {
    width: 300px;
    height: 300px;
    background: blue;
  }
`;

const ParallaxImage = ({ aboutImage }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div ref={ref} className="image-container">
      <motion.div className="overlay" />
      <Img fluid={aboutImage.asset.fluid} />
      <div className="blueBox" />
    </div>
  );
};

export default function About({ data: { about } }) {
  const aboutImages = about.aboutData.map((item) => item);
  console.log(aboutImages);
  return (
    <AboutStyles>
      <div className="container">
        <h1>Amsterdam</h1>
        {aboutImages.map((aboutImage) => (
          <ParallaxImage aboutImage={aboutImage} />
        ))}
      </div>
    </AboutStyles>
  );
}

export const query = graphql`
  query AboutQuery {
    about: sanityAbout {
      name
      aboutData {
        asset {
          _id
          fixed(width: 200, height: 200) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 410) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
