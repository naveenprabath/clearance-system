import React from 'react'
import Navigation from '../components/Navigation'
import  Stack  from '../components/Stack'
import  Image from '../components/Image'
import AboutUs from'../components/AboutUs'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';







function ContainerExample() {
  const rowStyle = {
    padding:'10px',
   
  };
  const pageStyles = {
    backgroundColor: 'white',
    minHeight: '100vh'
  };
  const containerStyle = {
    backgroundColor: 'blue',
  };
  
  return (
    <div style={pageStyles}>
   
   
    
    <Stack/>    
      <Navigation/>    
    
      <Row style= {{backgroundColor:"#B40505"}}>
      
       
      
      
        <h1 style={{fontFamily:'times new roman', color: "#FFC53A", textAlign:"center",border: "2px solid"}}>University Of Peradeniya Faculty Of Science <br/>Clearnce System</h1></Row>
      
     
      <Row> <hr/></Row>
      <Container>
      <Row><Image/>    </Row>
      </Container>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}></Row>
      <Row style= {rowStyle}></Row>
      
  
  
  <div style={{backgroundColor:"#343a40"}}>
  <Container >
  <br/>
  <Row >
  

    <Col>
    <Card style={{ width: '18rem', background:"#fd7e14" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Notice Board</Card.Title>
        <Card.Text>
        Special notices about the Clearnce
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col> </Col>

    <Col>
    <Card style={{ width: '18rem', background:"#fd7e14" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Quick Link</Card.Title>
        <Card.Text>
         Downloard the report
        </Card.Text>
       </Card.Body>
    </Card>
    </Col>
    <Col> </Col>

    <Col>
    <Card style={{ width: '18rem', background:"#fd7e14" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Quick Link</Card.Title>
        <Card.Text>
         Online Payment
        </Card.Text>
       </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row style= {rowStyle}></Row>
    <Row style= {rowStyle}></Row>
    <Row style= {rowStyle}></Row>
    <Row style= {rowStyle}></Row>
    </Container>
    
    </div>
  
   
  
  <AboutUs/>
  <br/> 
  <Container>
    
    <footer style={{ background: 'white', padding: '10px' }}>
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
          </Container>
    
    


    
    </div>
  );
}

export default ContainerExample;


