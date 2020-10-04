import React from 'react'
import { Nav } from 'react-bootstrap'
import BootstrapNavbar from 'react-bootstrap/Navbar'
import NavLink from '../NavLink'

function Navbar({ currentNav, setNav }) {
    const navPages = ['About','Portfolio','Resume','Contact']
    return(
        <>
        <BootstrapNavbar collapseOnSelect expand="lg" className="container-fluid" variant="light">
            <BootstrapNavbar.Brand>Brian Presta</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {navPages.map(page => (
                            <NavLink currentNav={currentNav} setNav={setNav} name={page} />
                        ))}
                    </Nav>
                </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        </>
    )
}

export default Navbar