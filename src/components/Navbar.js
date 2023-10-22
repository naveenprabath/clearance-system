import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


function Bar() {
  return (
    <Navbar bg="" expand="lg" className="p-2" style={{backgroundColor:"#B40505"}}>
      <div className="container">
        <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>University of Peradeniya</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>Dashboard</Nav.Link>
            <NavDropdown title="Department" id="basic-nav-dropdown" style={{ fontFamily: "times new roman", color: "goldenrod", textAlign: "center" }}>
              <NavDropdown.Item href="/about">Department of Computer Science & Statistics</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Zology</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Biology</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Physics</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Chemistry</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Mathematics</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Geology</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Micro Biology</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Science Library</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Sport Councile</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Accomadation</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>ContactUs</Nav.Link>
            <Nav.Link href="/" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>AboutUs</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="primary"  className="mx-2" style={{color:"black", }}><div className="p ms-auto">
        <Login/>       </div> </Button>
          <Button variant="primary" className="mx-2" style={{color:"black"}}><div className="p ms-auto">
        <Signup/>       </div></Button>
          <Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{}} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Bar;
