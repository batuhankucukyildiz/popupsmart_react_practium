import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import App from "./App";
import DarkMode from "./components/darkMode";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const User = () => {

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/create">
            <h6 className="text">Popupsmart React Practicum</h6>
          </Navbar.Brand>
          <DarkMode />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/create">
                <h6 className="text">Create</h6>
              </Nav.Link>
              <Nav.Link href="/read">
                <h6 className="text">Read</h6>
              </Nav.Link>
              <Nav.Link href="/update">
                <h6 className="text">Update</h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <App />
    </div>
  );
};

ReactDom.render(<User />, document.querySelector("#root"));
