import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-5">Copyright &copy; ProShop</Col>
        </Row>
      </Container>
      <h1>i am a footer</h1>
    </footer>
  );
};

export default Footer;
