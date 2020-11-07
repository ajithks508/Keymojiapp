import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import Link from 'next/link';

const Navdata = () =>{
    return <Navbar bg="light" expand="lg" className="header_area">
              <Navbar.Brand href="#home" className="navbar-brand logo_h">
                <Image className="imglogo" src="http://localhost/wordpress/wp-content/uploads/2020/11/cropped-logo.png"></Image>
                </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/index" className="nav-item">HOME</Nav.Link>
        <Nav.Link href="/Shop" className="nav-item">SHOP</Nav.Link>
        <Nav.Link href="/gallery" className="nav-item">GALLERY</Nav.Link>
        <Nav.Link href="/About" className="nav-item">ABOUT US</Nav.Link>
        <Nav.Link href="#link" className="nav-item">CART</Nav.Link>
        <Nav.Link href="#link" className="nav-item">WISHLIST</Nav.Link>
        <Nav.Link href="#link" className="nav-item">MY ACCOUNT</Nav.Link>
        <Nav.Link href="#link" className="nav-item">LOGOUT</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="form-control" />
        <Button variant="secondary"><i className="ti ti-search"></i></Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
}
export default Navdata;