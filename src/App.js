// import logo from './logo.svg';
import './App.css';
import Navi from './Navi.js';
import About from './About.js';
import Certificate from './Certificate.js';
import Fter from './footer.js';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
    <Navi />
    <hr class="m-0"></hr>
    <About />
    <hr class="m-0"></hr>
    <Certificate />
    <hr class="m-0"></hr>
    </>
    // <div className="App">
    //   
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   {/* <Fter /> */}
    // </div>
  );
}

export default App;
