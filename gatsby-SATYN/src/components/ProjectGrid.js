import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const CardGridStyles = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  position: relative;

  .gatsby-image-wrapper {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 100vw);
  }
`;

const CardStyles = styled.div`
  a {
    padding: 0;
  }
`;

export default function HomePage({ projects }) {
  return (
    <>
      <CardGridStyles>
        {projects.map((project) => (
          <CardStyles id={project.id}>
            <Link to={`/project/${project.slug.current}`} className="nav-link">
              <div className="imageWrapper">
                <Img
                  fluid={project.coverPhoto.asset.fixed}
                  alt={project.name}
                  class="imageCard"
                />
              </div>
            </Link>
          </CardStyles>
        ))}
      </CardGridStyles>
    </>
  );
}
