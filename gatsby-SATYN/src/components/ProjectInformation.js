import React from 'react';
import styled from 'styled-components';

const ProjectInformationStyles = styled.div`
  .projectInfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'title' 'description';
    text-align: left;
    grid-column-gap: 2em;
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
    margin: 0 0 0 auto;
    line-height: 2em;
    font-size: 0.75em;

    @media (max-width: 800px) {
      margin: 0 auto 0 0;
    }
  }
`;

export default function ProjectInformation({
  project: { name, subtitle, description },
}) {
  console.log({ name }, { subtitle }, { description });
  return (
    <>
      <ProjectInformationStyles>
        <div className="projectInfo">
          <div className="title">
            {name && <h2>{name}</h2>}
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
          {description && <div className="description">{description}</div>}
        </div>
      </ProjectInformationStyles>
    </>
  );
}
