import { graphql } from 'gatsby';
import React, { useState, useRef } from 'react';
import Img from 'gatsby-image';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutStyles from '../styles/AboutStyles';

export default function About({
  data: {
    about: { name, aboutData },
  },
}) {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 100], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  console.log(entry);

  return (
    <AboutStyles>
      <>
        <motion.div className="image" id="image1" style={{ y: y1 }}>
          <Img fluid={aboutData[0].asset.fluid} />
        </motion.div>
        <motion.div className="text" id="text1" style={{ y: y2 }}>
          {aboutData[0].caption}
        </motion.div>
        <div style={{ height: 500 }} />
        <div style={{ position: 'fixed', top: 0, left: 0 }}>
          {' '}
          {`is in view? ${inView}`}
        </div>
        <motion.div
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 2, ease: 'easeOut' }}
          ref={ref}
          className="magic"
        />
      </>
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
        caption
      }
    }
  }
`;
