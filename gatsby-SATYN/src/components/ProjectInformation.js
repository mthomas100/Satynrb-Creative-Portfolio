import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const ProjectInformationStyles = styled.div`
  .name {
    font-weight: 300;
    color: rgb(9 9 9 / 85%);
    letter-spacing: 2px;
  }

  .subtitle {
    color: rgb(9 9 9 / 85%);
  }

  .description {
    text-align: center;
    color: rgb(9 9 9 / 60%);
  }
`;

export default function ProjectInformation({
  project: { name, subtitle, description },
}) {
  return (
    <ProjectInformationStyles>
      <h1 className="display-4 name">{name}</h1>
      <p className="lead my-3 subtitle">{subtitle}</p>
      <p className="lead my-3 description">{description}</p>
    </ProjectInformationStyles>
  );
}
