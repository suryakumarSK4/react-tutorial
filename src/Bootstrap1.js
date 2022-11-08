import React from 'react';
import {Button,Container,Row,Col,Card} from 'react-bootstrap'

function Bootstrap1(){
    return (
        <div className="App">
            <h3>React Bootstrap</h3>
            <Button variant="warning" onClick={() => alert("surya")}>click me</Button>

            <Container>
              <h3>Containers</h3>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row style={{border:'2px solid black',margin:10}}>
    <Col xs={12} md={8} style={{border:'1px solid red', height:50}}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4} style={{border:'1px solid red', height:50}}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row style={{border:'2px solid black',margin:10}}>
    <Col xs={6} md={4} style={{border:'1px solid red', height:50}}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} style={{border:'1px solid red', height:50}}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} style={{border:'1px solid red', height:50}}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row style={{border:'2px solid black',margin:10}}>
    <Col xs={6} style={{border:'1px solid red', height:50}}>xs=6</Col>
    <Col xs={6} style={{border:'1px solid red', height:50}}>xs=6</Col>
  </Row>
</Container>

<Card  style={{ width: '18rem', marginLeft:50}}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Bootstrap1;