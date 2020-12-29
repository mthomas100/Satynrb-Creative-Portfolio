import React, { useState } from 'react';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SingleProjectStyles = styled.div`
  .imageContainer {
    overflow: hidden;
  }
`;

const transitionEnter = { duration: 1.3, ease: [0.0, 0.2, 0.4, 0.6] };
const transitionExit = { duration: 0.3, ease: [0.8, 0.9, 1, 1.0] };

const frameVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95, transition: { duration: 0.25, ...transitionExit } },
};

export default function SingleProject({ image }) {
  const [isToggled, setToggle] = useState(false);
  return (
    <SingleProjectStyles>
      <div className="imageContainer" id={image._id}>
        <motion.div
          className="frame"
          whileHover="hover"
          whileTap="tap"
          variants={frameVariants}
          transition={transitionEnter}
        >
          <Img fluid={image.asset.fluid} />
        </motion.div>
      </div>
    </SingleProjectStyles>
  );
}
