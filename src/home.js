import React from 'react';
import {Grid, Row, Col, Jumbotron, Panel, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import  imgData from './data/testData.js';
import  events from './data/testData.js';
import messages from './data/testData.js';

class SmallEvent  extends React.Component {
   render() {
    return(
      <Panel className="smallEvent">
        <span className="bold"> {this.props.name} </span>
        <br/>
        <span> {this.props.description} </span>
        <br />
      </Panel>
    );
  }
}

class SmallEventsPanel extends React.Component {

  constructor() {
    super();
    this.state = {
      events: events.events
    }
  }

  render() {
    const newEventsExist = events.events.length;
    const success = messages.messages.newEvents;
    const fail = messages.messages.noNewEvents;
    return (
      <Panel header={newEventsExist ? success : fail} bsStyle="primary" className="transparent">
          { this.state.events.map(
            (event, i ) => {
              return <SmallEvent name={event.name} description={event.description} key={i} />
            }
          )}
      </Panel>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div className="ridgeBordered" >
          <h2> IEEE Student Branch of ATEITH </h2>
          <br/>
          <p>
            Advancing technology for humanity!
          </p>
          <br/>
          <Link to="/about">
            <Button bsStyle="primary"> Learn More </Button>
          </Link>
        </div>
      </Jumbotron>
    );
  }
}

class MainPanel extends React.Component {

  render() {
    return(
      <Grid bsStyle="Container" fluid={true}>
        <Row className="home_main_panel">
            <Col md={3} >
              <Header />
            </Col>
            <Col md={10} sm={6} xs={12} mdOffset={2} xsOffset={0} className="bottom">
                <Row className="testMe">
                  <Col md={8} />
                  <Col md={4} xs={12} >
                    <SmallEventsPanel className="SmallEventsPanel"/>
                  </Col>
                </Row>
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default class Home extends React.Component {

  componentDidMount() {
      this.props.changeBackground("img", imgData.imgData.background);
  }

  componentWillUnmount() {
    this.props.changeBackground("color", "white");
  }

  render() {
    return(
        <MainPanel />
      );
  }
}
