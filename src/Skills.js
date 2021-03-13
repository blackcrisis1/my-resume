import { Card, CardGroup, Jumbotron, Modal, Button, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

export default function Skills() {

    return (
        <section className="bg-skill">
            <Container>
                <Jumbotron className="jumbotron text-center m-0 bg-rlight d-flex flex-column justify-content-center" id="skills">
                    <h1 className="m-5">SKILLS</h1>
                    <br />
                    <Row>
                        <Col xs className="CardDE">
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div>
                                    <h3 class="mb-3 text-md-left">Programming Language</h3>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> C# / Java</div>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> HTML / PHP</div>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Bootstrap / CSS</div>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> MySQL</div>
                                </div>
                            </div>
                        </Col>
                        <Col xs className="CardDE">
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div>
                                    <h3 class="mb-3 text-md-left">DESIGN</h3>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> UI / UX Design with Adobe Photoshop / Affinity Designer</div>
                                </div>
                            </div>
                        </Col>   
                    </Row>
                    <Row>
                        <Col xs className="CardDE">
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div>
                                    <h3 class="mb-3 text-md-left">OFFICE</h3>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Microsoft Office (Word, Excel, PowerPoint)</div>
                                </div>
                            </div>
                        </Col>
                        <Col xs className="CardDE">
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div>
                                    <h3 class="mb-3 text-md-left">INTERESTS</h3>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Frontend web developer</div>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Web Designer</div>
                                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> UX/UI Graphic Designer</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>

            </Container>
        </section>
    );
}
