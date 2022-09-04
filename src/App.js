import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import instaCartLogo from './instacart-logo.svg';
import splash from './instabackground.webp';
import styled from 'styled-components';
import Row  from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

const Splash = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${splash})`

  const containerWithLargeUpperMargin = styled(Container) `
    margin: 100px;
  `

const greenContainer = styled(Container) `
  color: green;
  `

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed='top'>
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src={instaCartLogo} alt='logo image' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Splash>
      <Container>
        <Row>
          <Col> <h1>Welcome to Store!</h1></Col>
        </Row>
        <Row>
          <Col><h3>Awesome Food 1</h3></Col>
          <Col><h3>Awesome Food 2</h3></Col>
          <Col><h3>Awesome Food 3</h3></Col>
        </Row>
        <Row>
          <Col>
            <greenContainer>
              <Row>
                <Col> This should be green </Col>
              </Row>

            </greenContainer>
         </Col> 
        </Row>
      </Container>
      </Splash>
    </>
  );
}

export default App;
