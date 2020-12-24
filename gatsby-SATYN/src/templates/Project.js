import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SingleProject from '../components/SingleProject';
import ProjectInformation from '../components/ProjectInformation';
import Video from '../components/Video';

const ProjectStyles = styled.div`
  text-align: center;
  max-width: 100vw;

  .projectWrapper {
    margin: 2em auto 0 auto;
    width: 800px;
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
`;

const ProjectGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 100vw);
  }
`;

export default function ProjectTemplate({ data: { project } }) {
  const imageGallery = project.image_Gallery;
  return (
    <>
      <ProjectStyles>
        <div className="projectWrapper">
          <ProjectInformation project={project} />
          {project?.videoURL && <Video project={project} />}
          {imageGallery && (
            <ProjectGridStyles>
              {imageGallery.map((image) => (
                <SingleProject image={image} />
              ))}
            </ProjectGridStyles>
          )}
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
      videoURL
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
