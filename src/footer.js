import { Container, Row, Col } from "react-bootstrap";

export default function footer() {
    return (
        <footer className="App-footer">
        <Container>
          <Row>
            <Col sm className="mr-auto text-left">
              <h5><span id="ncolor">RS</span>.Saksith</h5>
            </Col>
            <Col sm className="mr-auto text-left">
              <h6>ADDRESS</h6>
            </Col>
            <Col sm className="mr-auto text-left">
              <h6>CONTACT</h6>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}
