import React from 'react'


import { Container, Navbar, Nav, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <>

            <Navbar className='header fixed-top' bg="white" expand="lg">
                <Container className='px-0'>
                    <Navbar.Brand className='brandText text-uppercase py-1' href="#home">RedHanded</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='mr-md-auto'>
                        <Nav className="navItems ml-auto d-flex justify-content-center align-items-start">
                            <Nav.Link className='mx-4 navItem' href="#home">About</Nav.Link>
                            <Nav.Link className='mx-4 navItem' href="#link">Blog</Nav.Link>
                            <Nav.Link className='mx-4 navItem' href="#link">Partners</Nav.Link>
                            <Nav.Link className='mx-4 navItem' href="#link">Pricing</Nav.Link>
                            <Button className='logBtn btn-light'>Log In</Button>
                            <Button className='signBtn'>Sign up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header