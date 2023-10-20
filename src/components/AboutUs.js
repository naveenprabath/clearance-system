import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img4 from "../Images/b01.jpg";




function AboutUs() {

  

    return (
<div >


<img className="d-block w-100" src={Img4} alt="Image 1" style={{backgroundSize: 'cover',    backgroundPosition: 'center',}}></img>
         
<Row style={{alignItems:'center'}}>   


      

        <Col onMouseDown={.5}></Col>

        <Col md={3} style={{alignItems:"center"}}>
        <Card style={{ width: '18rem', minHeight: '40vh' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>About us</Card.Title>
        <Card.Text>
         xxxxx
        </Card.Text>
       </Card.Body>
       </Card>
        </Col>

        <Col md={3} style={{alignItems:"center"}}>
        <Card style={{ width: '18rem', minHeight: '40vh' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>About us</Card.Title>
        <Card.Text>
         xxxxx
        </Card.Text>
       </Card.Body>
       </Card>
        </Col>

        <Col md={3} >
          <Card style={{ width: '18rem', minHeight: '40vh' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
           <Card.Title>The Team</Card.Title>
           <Card.Text>
            xxxxx
           </Card.Text>
          </Card.Body>
           </Card>
        </Col>

        <Col onMouseDown={.5}></Col>
        
      </Row>
    
    
      
     

      
    
    </div>
    )
}

export default AboutUs;