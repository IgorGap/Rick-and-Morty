import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, Nav, Navbar, NavItem,
} from 'reactstrap';

function MyNavbar() {
  return (
    <div>
      <Navbar color="warning" dark expand="md" light>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/">Главная</Link>
              <Link to="fav">Избранное</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
