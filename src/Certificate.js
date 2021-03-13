import { Card, CardGroup, Jumbotron, Modal, Button, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import M1 from './asset/M1.png';
import M2 from './asset/M2.png';
import IC3 from './asset/ic3.png';
import MC from './asset/MC1.JPG';
import MCS from './asset/MCS1.JPG';
import IC31 from './asset/IC31.JPG';
import IC32 from './asset/IC32.JPG';

export default function Certificate() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <section className="bg-cer">
        <Container>
            <Jumbotron className="jumbotron text-center m-0 bg-rlight d-flex flex-column justify-content-center" id="cer">
            <h1 className="m-5"><span id="ncolor">MY</span> CERTIFICATE</h1>
            <br />
                <Row>
                    <Col sm className="CardDE">
                        <CardGroup>
                            <Card className="m1">
                                <Card.Img variant="top" src={M1} className="image" />
                                <Card.Body>
                                    <Card.Title>MICROSOFT OFFICE SPECIALIST</Card.Title>
                                    <div className="overlay" onClick={handleShow}>
                                        <div className="text">View</div>
                                    </div>
                                    <Card.Text>
                                        - Microsoft Office Word 2013
      </Card.Text>
                                </Card.Body>
                                {/* <Card.Footer>
                                    <small className="text-muted">See Detail</small>
                                </Card.Footer> */}
                            </Card>
                            <Card className="m1">
                                <Card.Img variant="top" src={M2} className="image" />
                                <Card.Body>
                                    <Card.Title>MICROSOFT TECHNOLOGY ASSOCIATE</Card.Title>
                                    <div className="overlay" onClick={handleShow2}>
                                        <div className="text">View</div>
                                    </div>
                                    <Card.Text>
                                        - Database Administration Fundamentals
        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="m1">
                                <Card.Img variant="top" src={IC3} className="image" />
                                <Card.Body>
                                    <Card.Title>IC3 DIGITAL LITERACY CERTIFICATION</Card.Title>
                                    <div className="overlay" onClick={handleShow3}>
                                        <div className="text">View</div>
                                    </div>
                                    <Card.Text>
                                        - IC3 Computing Fundamentals - Global Standard 5
                                        <br />- IC3 Key Applications - Global Standard 5
      </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
                <Modal centered size="lg" show={show} onHide={handleClose}>
                    {/* <Modal.Header closeButton>
                    </Modal.Header> */}
                    <Modal.Body><Image src={MC} fluid /></Modal.Body>
                </Modal>
                <Modal centered size="lg" show={show2} onHide={handleClose2}>
                    <Modal.Body><Image src={MCS} fluid /></Modal.Body>
                </Modal>
                <Modal centered size="lg" show={show3} onHide={handleClose3}>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row className="text-center">
                                <Col xs={12} md={12}>
                                    <Image src={IC31} fluid />
                                </Col>
                                <Col xs={12} md={12}>
                                    <br /><Image src={IC32} fluid />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </Jumbotron>

        </Container>
        </section>
    );
}
