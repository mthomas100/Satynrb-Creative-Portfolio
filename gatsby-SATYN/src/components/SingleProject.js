import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const ProjectDetailsStyles = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  color: rgba(0, 0, 0, 0.7);
  padding: 0 2em;
  transition: all 0.8s;
  .title {
    font-weight: 600;
    letter-spacing: 3px;
    padding-bottom: 0.25em;
  }
  .subtitle {
    letter-spacing: 3px;
    font-weight: 400;
    padding-top: 0.25em;
  }
`;

const CardStyles = styled.div`
  position: relative;
  a {
    padding: 0;
  }
  .gatsby-image-wrapper {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    /* position: relative; */
    z-index: 1;
  }
  &:hover ${ProjectDetailsStyles} {
    display: flex;
  }
`;

export default function SingleProject({ project }) {
  const myRef = useRef(null);

  const [width, setWidth] = useState(500);

  useEffect(() => {
    function handleResize() {
      console.log('client width', myRef.current.clientWidth);
      setWidth(myRef.current.clientWidth);
    }

    if (myRef && myRef.current) {
      window.addEventListener('load', handleResize);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <CardStyles key={project.id} ref={myRef}>
        <Link to={`/project/${project.slug.current}`} className="nav-link">
          <ProjectDetailsStyles>
            <div
              className="title"
              style={{ fontSize: `calc(${width / 300}em)` }}
            >
              {project.name}
            </div>
            <div
              className="subtitle"
              style={{ fontSize: `calc(${width / 450}em)` }}
            >
              {project.subtitle}
            </div>
          </ProjectDetailsStyles>
          <Img
            fluid={project.coverPhoto.asset.fixed}
            alt={project.name}
            class="projectImage"
          />
        </Link>
      </CardStyles>
    </>
  );
}
