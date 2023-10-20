import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AccademiStaffSignup from "../pages/AccademiStaffSignup";
import NonAccademiStaffSignup from "../pages/NonAccademiStaffSignup";
import Alert from 'react-bootstrap/Alert';



function RequestAccount(){
    const containerStyle = {
        backgroundColor: '#F9C449',
               
         minHeight: '10vh'
  };

  const pageStyles = {
    backgroundColor: '#63BCC9',
    minHeight: '80vh'
  };

  const navStyle = {
    backgroundColor: 'White'
  };
  
  const textStyle = {
    fontFamily: 'Arial, sans-serif', 
    fontSize: '20px', 
    lineHeight: '1.5',
    textAlign: 'center' ,
    marginTop: '20px', 
    
  };
  const rowStyle = {
    padding:'10px',
    textAlign: 'center', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
   
  };

return(
    <div style={pageStyles}>
        

            <Navbar expand="lg"  className="bg-body-tertiary justify-content-between"   style={{navStyle}}>
                
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
               
            </Navbar> 
          
            
            
            
            <br/>
            
            
            <Container style={containerStyle}>
                <Row>
                    <Col> <p style={textStyle }>Note : This is a Request Account Dashboard and if will not Signup plese Signup First.If you Sign Up go to University GSuite email Click to...<br/><div className="p-2 ms-auto">
        <Login/>
      </div>.<br/>  </p></Col>
                </Row>
            </Container>
            
            <br/>

            
            <Container>
            <Row style= {rowStyle}>
            <hr style={{border: '1.5px solid blue'}}/>
            <hr style={{border: '1.5px solid blue'}}/>
            </Row>
            </Container>

            
            <Container>
             <Row md={6} className="className=d-flex align-items-center justify-content-center p-1"> 

             <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: 'White' ,minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>ACCEDEMIC STAFF SIGNUP</Card.Title>
                    <Card.Text>
                        Add sutable icon
                    </Card.Text>

                    <div className="p-2 ms-auto">
                        <AccademiStaffSignup/>
                    </div>
                    
                   
                    </Card.Body>
                </Card>
                </Col>
              
                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'back', backgroundColor: 'White' ,minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>NON ACCEDEMIC STAFF SIGNUP</Card.Title>
                    <Card.Text>
                        Add sutable icon
                    </Card.Text>
                    <div className="p-2 ms-auto">
                        <NonAccademiStaffSignup/>
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                
                <Col  md={4} className="className=d-flex align-items-center justify-content-center p-1">
                <Card style={{ width: '18rem', color:'black', backgroundColor: 'White',minHeight: '40vh' }}>
                     <Card.Body className="text-center">
                    <Card.Title>STUDENT SIGNUP</Card.Title>
                    <Card.Text>
                        Add icon
                    </Card.Text>
                    <div className="p-2 ms-auto">
                        <Signup/>
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                

            </Row>
            </Container>


            <div>
            <br/>
            <br/>
            <br/>
            <br/>
            
      
      
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
         
    </div>
    );
}

export default RequestAccount;
