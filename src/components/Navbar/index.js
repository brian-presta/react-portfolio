import React from 'react'
import { Nav } from 'react-bootstrap'
import BootstrapNavbar from 'react-bootstrap/Navbar'

function Navbar({ currentNav, setNav }) {

    return(
        <>
        <BootstrapNavbar collapseOnSelect expand="lg" className="container-fluid" variant="light">
            <BootstrapNavbar.Brand>Brian Presta</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className={currentNav.about && 'selected'} href="#" onClick={() => setNav({about:true})}>About</Nav.Link>
                        <Nav.Link className={currentNav.portfolio && 'selected'} href="#" onClick={() => setNav({portfolio:true})}>Portfolio</Nav.Link>
                        <Nav.Link className={currentNav.resume && 'selected'} href="#" onClick={() => setNav({resume:true})} >Resume</Nav.Link>
                        <Nav.Link className={currentNav.contact && 'selected'} href="#" onClick={() => setNav({contact:true})}> Contact</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        </>
    )
}

export default Navbar