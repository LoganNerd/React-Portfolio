import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigation = ({ handlePageChange }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logan Juul</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" onClick={() => handlePageChange("About")}>
            About Me
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact Me
          </Nav.Link>
          <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
