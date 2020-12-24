import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ResponsiveEmbed } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const ProjectStyles = styled.div`
  text-align: center;
  max-width: 100vw;

  .projectWrapper {
    margin: 2em auto 0 auto;
    width: 800px;
  }

  .projectInfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'title' 'description';
    text-align: left;
    grid-gap: 2em;
    max-width: 100vw;

    @media (max-width: 1050px) {
      padding: 0 1.5em;
    }
    @media only screen and (max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 1em;
      padding: 0 1.5em 0 1.5em;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    text-align: left;
    grid-area: 'title';
    h2 {
      font-weight: bold;
      font-size: 1.5em;
      padding-bottom: 1em;
    }
    .subtitle {
      font-size: 0.9em;
    }
  }

  .description {
    grid-area: 'description';
    text-align: left;
    margin-left: auto;
    line-height: 2em;
    font-size: 0.75em;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #181717;
    margin: 1em 0;
    padding: 0;
    width: 100%;

    @media (max-width: 800px) {
      width: 100vw;
    }
  }

  .imageContainer {
    overflow: hidden;
  }
`;

const ProjectGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 100vw);
  }
`;

const transitionEnter = { duration: 1.3, ease: [0.0, 0.2, 0.4, 0.6] };
const transitionExit = { duration: 0.15, ease: [0.8, 0.9, 1, 1.0] };

const frameVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95, transition: { duration: 0.25, ...transitionExit } },
};

export default function ProjectTemplate({ data: { project } }) {
  const myRef = useRef(null);
  const imageGallery = project.image_Gallery;

  const [width, setWidth] = useState(null);

  const updateWidth = useCallback(() => {
    if (myRef && myRef.current) {
      const { offsetWidth } = myRef.current.offsetParent;
      console.log(offsetWidth);
      setWidth(offsetWidth);
    }
  }, [myRef]);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [updateWidth]);
  return (
    <>
      <ProjectStyles>
        <div className="projectWrapper">
          <div className="projectInfo">
            <div className="title">
              <h2>{project.name}</h2>
              <p className="subtitle">{project.subtitle}</p>
            </div>
            <div className="description">{project.description}</div>
          </div>

          <hr />

          <div style={{ width: '100%', maxWidth: '100vw', height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
              <embed
                type="video/mp4"
                src={project.video.asset.url}
                title={project.video.caption}
              />
            </ResponsiveEmbed>
          </div>

          <hr />

          <ProjectGridStyles>
            {imageGallery.map((image) => (
              <div className="imageContainer">
                <motion.div
                  className="frame"
                  whileHover="hover"
                  whileTap="tap"
                  variants={frameVariants}
                  transition={transitionEnter}
                >
                  <Img fluid={image.asset.fluid} id={image._id} />
                </motion.div>
              </div>
            ))}
          </ProjectGridStyles>
        </div>
      </ProjectStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      subtitle
      description
      coverPhoto {
        asset {
          fixed(width: 800, height: 800) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      video {
        caption
        asset {
          url
          id
        }
      }
      image_Gallery {
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
