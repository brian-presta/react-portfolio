import React from 'react'
import { Nav } from 'react-bootstrap'
import BootstrapNavbar from 'react-bootstrap/Navbar'

function Navbar() {

    return(
        <BootstrapNavbar expand="lg" className="container">
            <BootstrapNavbar.Brand>Brian Presta</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Portfolio</Nav.Link>
                        <Nav.Link href="#">Resume</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    )
}

export default Navbar