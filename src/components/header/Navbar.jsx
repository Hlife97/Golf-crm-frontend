import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar = () => {
  return (
    <div className='navbar-component'>
        <BootNavbar bg="light" expand="lg">
            <Container>
                <BootNavbar.Brand href="#home">Golf-CRM</BootNavbar.Brand>
                <BootNavbar.Toggle aria-controls="basic-BootNavbar-nav" />
                <BootNavbar.Collapse id="basic-BootNavbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#customers">Customers</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#tasks">Tasks</Nav.Link>
                        <Nav.Link href="#activities">Activities</Nav.Link>
                        <NavDropdown title="Mail" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#opportunities">Opportunities</Nav.Link>
                        <Nav.Link href="#offers">Offers</Nav.Link>
                        <NavDropdown title="orders" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricelists">Price Lists</Nav.Link>
                        <Nav.Link href="#contracts">Contracts</Nav.Link>
                        <Nav.Link href="#calendar">Calendar</Nav.Link>
                    </Nav>
                </BootNavbar.Collapse>
            </Container>
        </BootNavbar>
    </div>
  )
}
