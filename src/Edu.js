import { Card, CardGroup, Jumbotron, Modal, Button, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MC from './asset/MC1.JPG';
import MCS from './asset/MCS1.JPG';
import IC31 from './asset/IC31.JPG';
import IC32 from './asset/IC32.JPG';
import UTK from './asset/LRMUTK.png';
import NP from './asset/NBAC.png';

export default function Edu() {

    return (
        <section className="bg-edu">
            <Container>
                <Jumbotron className="jumbotron text-center m-0 bg-rlight d-flex flex-column justify-content-center" id="edu">
                    <h1 className="m-5">EDUCATION</h1>
                    <br />
                    <Row>
                        <Col xs className="CardDE">
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div>
                                    <h3 class="mb-0">Rajamangala University of Technology Krungthep</h3>
                                    <div class="subheading mb-3 text-md-left">Bachelor of Science</div>
                                    <div class="text-md-left">Computer Science</div>
                                    <div class="text-primary text-md-left">August 2016 - Current</div>
                                    
                                </div>
                                <div class="text-md-right">
                                    <span><Image src={UTK} width="63px" height="112px" fluid /></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs className="CardDE">
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div>
                                    <h3 class="mb-0">NAKPRASITH SCHOOL</h3>
                                    <div class="subheading mb-3 text-md-left">SENIOR HIGH SCHOOL</div>
                                    <div class="text-md-left">Bussiness Computer</div>
                                    <div class="text-primary text-md-left">May 2013 - March 2016</div>
                                </div>
                                <div class="text-md-right">
                                    <span class="text-primary"><Image src={NP} width="90px" height="90px" fluid /></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>

            </Container>
        </section>
    );
}
