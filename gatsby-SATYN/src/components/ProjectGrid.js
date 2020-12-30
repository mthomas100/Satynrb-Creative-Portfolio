import React from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';

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

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 100vw);
  }
`;

export default function HomePage({ projects }) {
  return (
    <>
      <div className="cardGridWrapper">
        <CardGridStyles>
          {projects.map((project) => (
            <div className="projectWrapper">
              {typeof window !== `undefined` && (
                <SingleProject key={project.id} project={project} />
              )}
            </div>
          ))}
        </CardGridStyles>
      </div>
    </>
  );
}
