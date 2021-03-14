// import logo from './logo.svg';
import './App.css';
import Navi from './Navi.js';
import About from './About.js';
import Certificate from './Certificate.js';
import Fter from './footer.js';
import { Container, Row, Col, Image } from "react-bootstrap";
import Edu from './Edu';
import Skills from './Skills';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, FlexCenterStyle } from "react-scroll-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Card, CardGroup, Jumbotron, Modal, Button } from "react-bootstrap";
import M1 from './asset/M1.png';
import M2 from './asset/M2.png';
import IC3 from './asset/ic3.png';
import UTK from './asset/LRMUTK.png';
import NP from './asset/NBAC.png';
import React, { Component, useEffect } from "react";
import { init } from "ityped";


// function App() {
//   return (
//     <>
//       <Navi />
//       <hr class="m-0"></hr>
//       <About />
//       <hr class="m-0"></hr>
//       <Certificate />
//       <hr class="m-0"></hr>
//       <Edu />
//       <hr class="m-0"></hr>
//       <Skills />
//     </>
//     // <div className="App">
//     //   
//     //   {/* <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header> */}
//     //   {/* <Fter /> */}
//     // </div>
//   );
// }
const App = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  useEffect(()=>{
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: ["SAKSITH UPPHAKARAKUL","© Saksith U, 20/01/2021"]
    });
  },[])

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="text-center"><span id="myElement" style={{ fontSize: "3em" }}></span></div>
          <div className="text-center">
            <p style={{ fontSize: "1em" }}>
              I am senior student in major of Computer Science at Rajamangala University of Technology Krungthep. I'm interested in Web Front-End developers.
              And I hope to use what I learn as much as possible.
          </p>
          </div>
          <br />
          <div className="text-center"><FontAwesomeIcon icon={['fa', 'chevron-down']} color="#1dd1a1" /></div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>MY CERTIFICATE</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <Container>
            <Col sm className="CardDE">
              <div data-iframe-width="210" data-iframe-height="270" data-share-badge-id="b76600b5-cca0-449e-8e79-0df0097c53cb" data-share-badge-host="https://www.youracclaim.com"></div>
              <div data-iframe-width="210" data-iframe-height="270" data-share-badge-id="67087c57-d784-446d-87eb-6b1cf4df9a5b" data-share-badge-host="https://www.youracclaim.com"></div>
              <br />
              <div data-iframe-width="210" data-iframe-height="270" data-share-badge-id="9a2b5ad8-cb44-4de5-bda3-7d0508ee0713" data-share-badge-host="https://www.youracclaim.com"></div>
              <div data-iframe-width="210" data-iframe-height="270" data-share-badge-id="03dede0f-2018-4004-8220-240c69dc16a0" data-share-badge-host="https://www.youracclaim.com"></div>
            </Col>
          </Container>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>EDUCATION</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={FadeUp}>
          <Container>
            <Col xs className="CardDE">
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div>
                  <h3 class="mb-0">Rajamangala University of Technology Krungthep</h3>
                  <div class="subheading mb-3 text-md-left">Bachelor of Science</div>
                  <div class="text-md-left">Computer Science</div>
                  <div class="text-primary text-md-left">August 2016 - Current</div>

                </div>
                <div class="text-md-right">
                  <span><Image src={UTK} width="90px" height="90px" fluid /></span>
                </div>
              </div>
            </Col>
          </Container>
          <Container>
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
          </Container>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>SKILLS</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={batch(Fade(), Sticky())}>
          <Container class="tableskill">
            <Animator animation={MoveIn(-1000, 0)}>
              <Container xs className="CardDE">
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div>
                    <h3 class="mb-3 text-md-left">Programming Language</h3>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> C# / Java</div>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> HTML / PHP</div>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Bootstrap / CSS</div>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> MySQL</div>
                  </div>
                </div>
              </Container>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
              <Container xs className="CardDE">
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div>
                    <h3 class="mb-3 text-md-left">DESIGN</h3>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> UI / UX Design with Adobe Photoshop / Affinity Designer</div>
                  </div>
                </div>
              </Container>
            </Animator>
          </Container>
          <Container class="tableskill">
            <Animator animation={MoveIn(-1000, 0)}>
              <Container xs className="CardDE">
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div>
                    <h3 class="mb-3 text-md-left">OFFICE</h3>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Microsoft Office (Word, Excel, PowerPoint)</div>
                  </div>
                </div>
              </Container>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
              <Container xs className="CardDE">
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div>
                    <h3 class="mb-3 text-md-left">INTERESTS</h3>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Frontend web developer</div>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> Web Designer</div>
                    <div class="text-md-left"><FontAwesomeIcon icon={['fas', 'check-circle']} color="#1dd1a1" /> UX/UI Graphic Designer</div>
                  </div>
                </div>
              </Container>
            </Animator>
          </Container>
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>CONTACT</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={8}>
        <Animator animation={batch(Fade(), Sticky())}>
          <Animator animation={MoveIn(1000, 0)}>
            <a href="https://www.facebook.com/jokung.nakubpom" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} color="#3b5998" /><span style={{ color: "black" }}> JoJo's Saksith </span></a>
          </Animator>
          <br />
          <Animator animation={MoveIn(-1000, 0)}>
            <a href="https://twitter.com/jojo_sku" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} color="#00acee" /><span style={{ color: "black" }}> ᴊᴏᴊᴏsᴋᴜ </span></a>
          </Animator>
          <br />
          <Animator animation={MoveIn(1000, 0)}>
            <a href="mailto: jo.saksith@hotmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} color="#FBBC05" /><span style={{ color: "black" }}> Email </span></a>
          </Animator>
          <br />
          <Animator animation={MoveIn(-1000, 0)}>
            <a href="tel:063-313-0493"><FontAwesomeIcon icon={['fas', 'phone']} color="#636e72" /><span style={{ color: "black" }}> (+66) 63-313-0493 </span></a>
          </Animator>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};


export default App;
