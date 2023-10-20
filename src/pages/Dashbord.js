import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import AboutUs from "../components/AboutUs";
import Login from "../pages/Login";


function Dashboard(){
    const containerStyle = {
            backgroundColor: 'white',
            minHeight: '10vh'
            
             
      };

      const pageStyles = {
        backgroundColor: 'white',
        minHeight: '100vh'
      };

      const navStyle = {
        backgroundColor: '#B40505'
      };

      
    return(
        
        <div style={pageStyles}>
            
            <Navbar expand="lg"  className="bg-body-tertiary justify-content-between"  style={{background:"#B40505"}}>  
                <Container>
                <Navbar.Brand href="#home">University Of Peradeniya Faculty Of Science Clearnce System Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                      
                    
                    
                 <Form inline className="mr-4" >
                    <Row >
                    <Col >
                        <Form.Control   type="text"  placeholder="Search" className=" mr-sm-2" />
                        </Col>
                        <Col  >
                        <Button variant='outline-success'>Search</Button>
                    </Col>
                    
                    </Row>
                </Form>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/>
            <br/>
            
            
  
            <Container style={containerStyle} >
            
             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">
                
                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1" >
                
                <Card style={{ width: '18rem', color:'back', backgroundColor: "white" ,minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Home page</Card.Title>
                    <Card.Text>
                        Add sutable icon
                    </Card.Text>
                    <a href="/Home">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: "#fd7e14" ,minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Request Account</Card.Title>
                    <Card.Text>
                        Add sutable icon
                    </Card.Text>
                    <a href="/RequestAccount">
                    <Button variant="primary">Click Me</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: "#fd7e14" ,minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title> Login Interface</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <div className="p-2 ms-auto">
                     <Login/>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
           
             </Row>

             

               

             

             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">

                

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: "#fd7e14",minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Account Renew</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: "#fd7e14" ,minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Payment Gate</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: "#fd7e14",minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>Admin Support</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <Button variant="primary">Click Me</Button>
                    </Card.Body>
                </Card>
                </Col>
                           
             </Row>
          
            </Container>
            
           <AboutUs style={{backgroundColor: 'blue'}}/>
           
            
    
    <footer style={{ background: 'lightgray', padding: '10px' }}>
                <Container>
                <Row>
                    <Col md={6}>
                    <p>&copy; {new Date().getFullYear()} Your Company Name</p>
                    </Col>
                    <Col md={6} className="text-right">
                    <p>Contact: contact@example.com</p>
                    </Col>
                </Row>
                </Container>
            </footer>
          
        </div>

    );
}

export default Dashboard;