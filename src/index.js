import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home.js';
import About from './about.js';
import Events from './events.js';
import Blog from './blog.js';
import Contact from './contact.js';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="./index.js">IEEE ATEITH SB</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={() => {this.props.onClick(1)}}>Home</NavItem>
            <NavItem onClick={() => {this.props.onClick(2)}}> About</NavItem>
            <NavItem onClick={() => {this.props.onClick(3)}}>Events</NavItem>
            <NavItem onClick={() => {this.props.onClick(4)}}>Blog</NavItem>
            <NavItem onClick={() => {this.props.onClick(5)}}> Contact </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Page extends React.Component {

  constructor() {
    super();
    this.pageIndexes = {
      home: 1,
      about: 2,
      events: 3,
      blog: 4,
      contact: 5
    };
    this.pages = {
      home: Home,
      about: About,
      events: Events,
      blog: Blog,
      contact: Contact
    };
    this.state = { contents: this.pages.home  }
  }

  onPageChange(page) {
    switch(page) {
      case 1: this.setState({contents: this.pages.home});
      break;
      case 2: this.setState({contents: this.pages.about});
      break;
      case 3: this.setState({contents: this.pages.events});
      break;
      case 4: this.setState({contents: this.pages.blog});
      break;
      case 5: this.setState({contents: this.pages.contact});
      break;
      default: this.setState({contents: this.pages.home});
    }
  }

  render() {
    return (
      <div>
        <NavigationBar onClick={(index)=>{this.onPageChange(index)}}/>
        {this.state.contents}
      </div>
    );
  }
}


ReactDOM.render(<Page />, root);
