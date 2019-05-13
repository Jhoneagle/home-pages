import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Menu = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <div className="menu">
        <Navbar.Header>
            <Navbar.Brand>
              Johneagle´s home pages
            </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
          <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/aboutme">
              <NavItem>About me</NavItem>
            </LinkContainer>
            <LinkContainer to="/tipandtrick">
              <NavItem>Usefull things</NavItem>
            </LinkContainer>
            <LinkContainer to="/calculator">
              <NavItem>Calculator</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
};

export default Menu