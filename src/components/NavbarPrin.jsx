import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarPrin = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
            <NavLink to="/" style={{ textDecoration:'none', padding:'9px' }}>React-Bootstrap</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
                <NavLink to="/" style={{ textDecoration:'none', padding:'9px' }}>Home</NavLink>
                <NavLink to="/pokemones" style={{ textDecoration:'none', padding:'9px' }}>Pokemones</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPrin