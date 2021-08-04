import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Genshin Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Characters" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/characters">Manage</NavDropdown.Item>
                    <NavDropdown.Item href="/characters/create">Create</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#talentMaterials">Manage Talent Materials</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;