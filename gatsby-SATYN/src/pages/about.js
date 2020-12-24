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

export default function About() {
  return (
    <>
      <div className="center">
        <p>This page doesn't exist yet!</p>
      </div>
    </>
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
