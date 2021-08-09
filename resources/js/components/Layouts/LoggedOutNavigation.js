import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const LoggedOutNavigation = () => {

    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Nav className="container-fluid">
                    <Navbar.Brand href="#home">Genshin Site</Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default LoggedOutNavigation;