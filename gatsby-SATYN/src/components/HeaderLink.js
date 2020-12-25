import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderLinkStyles = styled.div`
  span {
    color: var(--blue);
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 2px;
  }
`;

export default function HeaderLink({ name, linkOverride }) {
  console.log({ linkOverride });
  return (
    <HeaderLinkStyles className="header-link">
      <Link
        to={`/${typeof linkOverride !== 'undefined' ? linkOverride : name}`}
        className="nav-link"
        activeClassName="active"
      >
        <span>{name}</span>
      </Link>
    </HeaderLinkStyles>
  );
}
