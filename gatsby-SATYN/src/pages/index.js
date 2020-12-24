import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ProjectGrid from '../components/ProjectGrid';

export default function HomePage({ data }) {
  const projects = data.projects.nodes;
  console.log(projects);

  return (
    <>
      <ProjectGrid projects={projects} />
    </>
  );
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject {
      nodes {
        name
        id
        subtitle
        description
        slug {
          current
        }
        coverPhoto {
          asset {
            fixed(width: 1600) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
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
  }
`;
