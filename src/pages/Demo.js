import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Stackl from '../components/Stackl';



 function Demo() {
    const pageStyles = {
        margin: '40px', 
        maxWidth: '',
        backgroundColor: '#B8E3FF',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
      
      }
  return (
    <div style={pageStyles}>
      <br/>
      <Container>
        <Row>
          <Stackl/>
        </Row>
      </Container>

        
        <br/>
        <h1 style={{fontFamily:'times new roman', color: "black", textAlign: 'center'}}>Letchers Login </h1>
        <div style={pageStyles}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" />
        <Form.Text className="text-muted">
        
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="This is correct details" />
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>
         Submit
    </Button>
    <br/>

    </Form>
      </div>
  </div>
  )
}
export default Demo;