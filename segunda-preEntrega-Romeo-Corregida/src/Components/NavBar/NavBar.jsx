import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Normales from '../Normales'

import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';


function NavBar() {
    return (
      <>
      
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand to="/"><p className='text-logo'> LaPizza</p> </Navbar.Brand>
            <Nav className="container">
              <Link to="/">Inicio</Link>
              <Link to="/categoria/normales">Normales </Link>
              <Link to="/categoria/vegetales">Con Vegetales</Link>
              <Link to="/categoria/especiales">Especiales</Link>
              <Link to="/cart"> <CartWidget/> </Link>
            </Nav>
              
        </Container>
       
      </Navbar>
      </>
  );
}

export default NavBar;
