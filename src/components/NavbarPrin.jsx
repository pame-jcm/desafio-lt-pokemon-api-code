import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const NavbarPrin = () => {

  const setActiveClass = ({isActive}) => (isActive ? 'activeNav' : 'non-activeNav');

  return (
    <Navbar bg="gris" expand="lg">
      <Container>
        <Navbar.Brand>
            <NavLink className={ setActiveClass } to="/location" style={{ textDecoration:'none', padding:'9px' }}>
              <FontAwesomeIcon icon={faLocationDot} />
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
                <NavLink className={ setActiveClass } to="/" style={{ textDecoration:'none', padding:'9px' }}>Home</NavLink>
                <NavLink className={ setActiveClass } to="/pokemones" style={{ textDecoration:'none', padding:'9px' }}>Pokemones</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPrin