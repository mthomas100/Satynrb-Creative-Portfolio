import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProjectStyles = styled.div`
  .video iframe {
    width: 100%;
    height: 500px;
  }
`;

export default function projectTemplate({ data: { project } }) {
  return (
    <ProjectStyles>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Img
        fluid={project.coverPhoto.asset.fluid}
        alt={project.name}
        class="imageCard"
      />
      <div className="video">
        <iframe
          title={project.video.caption}
          src={project.video.asset.url}
          id={project.video.asset.id}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </ProjectStyles>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      description
      coverPhoto {
        asset {
          fluid(maxWidth: 800) {
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
