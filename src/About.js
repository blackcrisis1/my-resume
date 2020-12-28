import { Jumbotron, Button, Card, Container , Image} from "react-bootstrap";
// import W1 from './asset/W1.jpg';
// import W2 from './asset/W2.jpg';
import PJ from './asset/profile.jpg';

export default function About() {
  return (
    <>
    <section className="bg-aimg">
    <Container>
      <Jumbotron className="jumbotron text-center m-0 bg-rlight d-flex flex-column justify-content-center" id="about">
      <div className="text-center"><Image src={PJ} roundedCircle width="100" height="100"/></div>
      <br />
        <h1><span id="ncolor">SAKSITH</span> UPPHAKARAKUL</h1>
        <p>
        I am senior student in major of Computer Science at Rajamangala University of Technology Krungthep. I'm interested in Web Front-End developers.
        And I hope to use what I learn as much as possible.
        </p>
        <p>
          <Button variant="primary" href="#cer">Hire me!</Button>
        </p>
      </Jumbotron>
      </Container>
      </section>
    </>
  );
}
