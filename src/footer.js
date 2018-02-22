import React from 'react';
import FontAwesome from 'react-fontawesome';
import ieee from './img/IEEELogo.png';
import ieeeExplore from './img/IEEEEXPLORELogo.png';
import ieeeSpectrum from './img/IEEESPECTRUMLogo.png';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import './style/footer.css';

class SocialLinks extends React.Component {
  render () {
    return (
      <FontAwesome
        className="social-icon"
        name={this.props.name}
        size={this.props.size} />
    )
  }
}

class Logo extends React.Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.alt} />
    )
  }
}

class MenuBar extends React.Component {
  render () {
    return (
      <span>{this.props.item}</span>
    )
  }
}

class Copyright extends React.Component {
  render () {
    return (
      <p className="copyright">© Copyright 2018 IEEE ATEITH Student Branch - All Rights Reserved</p>
    )
  }
}

export default class Footer extends React.Component{
  render() {
    return (
      <div className="footer">
        <Router>
        <div className="bottom-nav">
            <Link to="/">
              <MenuBar item="Home" />
            </Link>
            <Link to="/about">
              <MenuBar item="About" />
            </Link>
            <Link to="/blog">
              <MenuBar item="Blog" />
            </Link>
            <Link to="/events">
              <MenuBar item="Events" />
            </Link>
            <Link to="/contact">
              <MenuBar item="Contact" />
            </Link>
        </div>
        </Router>
        <Router>
          <div>
            <SocialLinks name="facebook-square" size="2x"/>
            <SocialLinks name="twitter-square" size="2x"/>
            <SocialLinks name="instagram" size="2x"/>
            <SocialLinks name="youtube" size="2x"/>
          </div>
        </Router>
        <div className="logos">
          <Logo source={ieee} alt="IEEE Logo"/>
          <Logo source={ieeeExplore} alt="IEEE Explore Logo"/>
          <Logo source={ieeeSpectrum} alt="IEEE Spectrum Logo"/>
        </div>
        <Copyright />
      </div>
    )
  }
}
