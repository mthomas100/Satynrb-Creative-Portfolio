import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 2em;
  margin: 0;
  --borderSize: 1em;
  display: flex;
  font-family: ReenieBeanie;
  /* font-weight: 400; */
  h1 {
    display: grid;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    /* transform: translateY(0.7em); */
  }

  .satynrb {
    font-size: 1em;
    letter-spacing: 0.2em;
  }
  .letter {
    font-size: 1em;
    color: var(--blue);
    /* --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg; */
    /* transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX)); */
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.S {
    }
    &.a {
    }
    &.t {
    }
    &.y {
    }
    &.n {
    }
    &.R {
    }
    &.B {
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <Link to="/" className="nav-link" activeClassName="active">
        <h1>
          <span className="satynrb">
            <span className="letter S">S</span>
            <span className="letter a">a</span>
            <span className="letter t">t</span>
            <span className="letter y">y</span>
            <span className="letter n">n</span>
            <span className="letter R">R</span>
            <span className="letter B">B</span>
          </span>
        </h1>
      </Link>
    </LogoStyles>
  );
}
