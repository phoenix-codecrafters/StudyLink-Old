import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-3">
    <Row className="">
      <Col className="text-center">
        <div>
          <h2>Welcome</h2>
          <p>Desc</p>
        </div>
      </Col>
      <Col className="text-center">
        <h5>image here</h5>
      </Col>
    </Row>
  </Container>
);

export default Landing;
