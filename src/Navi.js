import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from "react-bootstrap";
import L1 from './asset/logo191.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

export default function Navi() {
    return (
        <Navbar id="home" bg="light" expand="lg">
            <Navbar.Brand href="#page-top"><img
                alt=""
                src={L1}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}<span id="ncolor">RS</span>.Saksith</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-center">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#cer">Certificate</Nav.Link>
                    <Nav.Link href="#edu">Education</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav className="text-center d-flex">
                    <Nav.Link href="https://www.facebook.com/jokung.nakubpom" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} color="#3b5998"/></Nav.Link>
                    <Nav.Link href="https://twitter.com/jojo_sku" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} color="#00acee"/></Nav.Link>
                    <Nav.Link href="mailto: jo.saksith@hotmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} color="#FBBC05" /></Nav.Link>
                    <Nav.Link href="tel:063-313-0493">063-313-0493</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}