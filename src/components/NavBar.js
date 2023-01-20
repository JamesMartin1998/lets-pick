import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><i className="fas fa-home"></i>Home</Nav.Link>
            <Nav.Link href="#link"><i className="fas fa-sign-in"></i>Sign In</Nav.Link>
            <Nav.Link href="#link"><i className="fas fa-user-plus"></i>Sign Up</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;