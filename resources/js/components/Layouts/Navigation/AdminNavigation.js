import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import AuthenticationService from '../../../_services/authentication-service';
import CookiesService from "../../../_services/cookie-service";

const AdminNavigation = () => {

    const history = useHistory();

    const logout = () => {
        AuthenticationService.logout()
            .then(response => {
                CookiesService.logout();
                history.push('/login')
            })
    }

    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Nav className="container-fluid">
                    <Navbar.Brand href="#home">Genshin Site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Characters" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/characters">Manage</NavDropdown.Item>
                                <NavDropdown.Item href="/characters/create">Create</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/talentMaterials">Manage Talent Materials</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav.Item className="ml-auto">
                            <Nav.Link onClick={logout}>Log Out</Nav.Link>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AdminNavigation;