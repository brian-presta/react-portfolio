import React from 'react'
import { Nav } from 'react-bootstrap'

function NavLink({name, currentNav, setNav}) {
    return (
        <Nav.Link
        className={currentNav === name && 'selected'}
        href='#'
        onClick={() => setNav(name)}
        >
            {name}
        </Nav.Link>
    )
}

export default NavLink
