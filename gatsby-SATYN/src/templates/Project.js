import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { auto } from '@popperjs/core';
import ProjectPicture from '../components/ProjectPicture';
import ProjectInformation from '../components/ProjectInformation';
import Video from '../components/Video';
import 'bootstrap/dist/css/bootstrap.css';

const ProjectStyles = styled.div`
  text-align: center;
  max-width: 100vw;
  .projectWrapper {
    margin: 0em auto 0 auto;
    max-width: 800px;
  }
  hr {
  }
`;

const ProjectGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 100vw);
  }
  @media (max-width: 450px) {
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
          {project.videoData?.videoURL && (
            <Video videoData={project.videoData} />
          )}
          {imageGallery.length > 0 && (
            <>
              <hr />
              <ProjectGridStyles>
                {imageGallery.map((image) => (
                  <ProjectPicture image={image} />
                ))}
              </ProjectGridStyles>
            </>
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
      videoData {
        videoURL
        aspectRatio
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
