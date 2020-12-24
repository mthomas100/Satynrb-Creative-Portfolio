import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './Logo';
import HeaderLink from './HeaderLink';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const NavStyles = styled.div`
  padding: 2em;

  /* media query = short term solution
  long term solution is to check distance to left of city shots
  never let logo distance exceed it.... basically program to be equal
  in this edge case */
  @media (max-width: 880px) {
    padding: 1em;
  }
  @media (max-width: 875px) {
    padding: 0.85em;
  }

  @media (max-width: 840px) {
    padding: 0.75em;
  }

  @media (max-width: 800px) {
    padding: 0.5em;
  }

  li {
    display: flex;
    justify-content: center;
  }

  .header-link + .header-link {
    margin-left: 2em;
  }

  /* #responsive-navbar-nav {
    display: flex;
    align-items: space-between;
  } */
`;

export default function Header() {
  return (
    <>
      <NavStyles>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">
          <Navbar.Brand as="div">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <HeaderLink name="work" />
                <HeaderLink name="about" />
                <HeaderLink name="reach" />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavStyles>
    </>
  );
}
