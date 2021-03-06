import React from 'react'
import { Nav } from 'react-bootstrap'
import BootstrapNavbar from 'react-bootstrap/Navbar'
import NavLink from '../NavLink'

function Header({ currentNav, setNav }) {
    const navPages = ['About','Portfolio','Resume','Contact']
    return(
        <header className="container-fluid">
        <BootstrapNavbar collapseOnSelect expand="lg" className="container-fluid" variant="light">
            <h1 className="px-1">Brian Presta</h1>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
                    <Nav className="justify-content-between col-lg-5 align-items-center">
                        {navPages.map(page => (
                            <NavLink currentNav={currentNav} setNav={setNav} name={page} key={page}/>
                        ))}
                    </Nav>
                </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        </header>
    )
}

export default Header