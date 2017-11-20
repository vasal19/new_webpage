import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home.js';
import About from './about.js';
import Events from './events.js';
import Blog from './blog.js';
import Contact from './contact.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">IEEE ATEITH SB</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer exact to="/">
                <NavItem > Home  </NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem > About   </NavItem>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavItem > Events  </NavItem>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavItem > Blog    </NavItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavItem > Contact </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar onClick={(index)=>{this.onPageChange(index)}}/>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About}/>
              <Route path="/events" component={Events}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<Page />, root);
