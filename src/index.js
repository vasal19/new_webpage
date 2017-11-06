import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">IEEE ATEITH SB</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#">Home</NavItem>
            <NavItem href="#">About</NavItem>
            <NavItem href="#">Events</NavItem>
            <NavItem href="#">Blog</NavItem>
            <NavItem href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}


ReactDOM.render(<Page />, root);
