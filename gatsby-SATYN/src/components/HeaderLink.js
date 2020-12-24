import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderLinkStyles = styled.div`
  span {
    color: var(--darkBlue);
    font-family: Montserrat;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 2px;
  }
`;

export default function HeaderLink({ name }) {
  return (
    <HeaderLinkStyles className="header-link">
      <Link to={`/${name}`} className="nav-link" activeClassName="active">
        <span>{name}</span>
      </Link>
    </HeaderLinkStyles>
  );
}
