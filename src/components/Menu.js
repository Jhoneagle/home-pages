﻿import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Menu = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Johneagle´s home pages
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/home-pages/">
	    <NavItem>Home</NavItem>
	  </LinkContainer>
	  <LinkContainer to="/home-pages/aboutme">
	    <NavItem>About me</NavItem>
	  </LinkContainer>
	  <LinkContainer to="/home-pages/tipandtrick">
	    <NavItem>Usefull things</NavItem>
	  </LinkContainer>
	  <LinkContainer to="/home-pages/calculator">
	    <NavItem>Calculator</NavItem>
	  </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu