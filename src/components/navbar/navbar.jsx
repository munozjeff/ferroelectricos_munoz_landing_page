import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
import logo from "../../assets/albañil.png"

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img className='logo' src={logo} alt="logo" />
          <p>
            Ferroelectricos y soluciones Muñoz
          </p>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls='drop-down-list' />
          <Navbar.Collapse id='drop-down-list'>
            <Nav className="me-auto">
              <hr />
              <Nav.Link href="#home">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export {NavBar};