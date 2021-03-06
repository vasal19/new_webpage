import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/events.css';
import './style/main.css';
import events from "./data/myevents.js";
import Event from "./event.js";
import {Row, Col, Panel, Collapse, Pagination} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

class LabeledIcon extends React.Component {
  render() {
    return(
      <div className="label-with-icon">
        <FontAwesome name={this.props.icon} />
        <label> {this.props.label} </label>
      </div>
    );
  }
}

class EventDate extends React.Component {
  render() {
    const fullDate = this.props.date;
    const number = fullDate.substring(0, fullDate.indexOf("/"));
    const month  = fullDate.substring(fullDate.indexOf("/")+1, fullDate.indexOf("/", 3));
    const time = fullDate.substring(fullDate.indexOf(" ")+1, fullDate.length);
    return(
      <div className="eventDate">
	     <Row> {number} {month}</Row>
       <Row> {time} </Row>
      </div>
    );
  }
}

class EventHeader extends React.Component {

  render() {
    return(
      <Row className="eventHeader">
        <Col md={2} xs={3}> <EventDate date={this.props.date}/> </Col>
        <Col md={8} xs={7}> <div className="eventTitle">{this.props.title}</div> </Col>
        <Col md={2} xs={2} >
          <div> <FontAwesome size="3x" name={this.props.status ? "angle-double-up" :"angle-double-down"} /> </div>
        </Col>
      </Row>
    );
  }

}

class EventBody extends React.Component {

  limit(text) {
    const max = 500;
    const link = text.length > 500 ? <Link to={`/events/${this.props.title.toLowerCase()}`}> <u> Continue Reading </u> </Link> : <span> </span> ;
    return <p> {text.substring(0, 500)} {link} </p>
  }

  render() {
    return (
      <Row>
        <Row className="eventNameInfo">
          <Col md={3} xs={4} mdOffset={1} xsOffset={1}> <LabeledIcon icon="location-arrow" label={this.props.location}/> </Col>
          <Col md={3} xs={4} mdOffset={0} xsOffset={0}> <LabeledIcon icon="users" label={this.props.organizer}/> </Col>
          <Col md={3} xs={3}>
            <Link to={"/events/" + this.props.title.toLowerCase()}>
              <LabeledIcon icon="link" label="learn more" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={10} xs={10} mdOffset={1} xsOffset={1}>
            {this.limit(this.props.description)}
          </Col>
        </Row>
      </Row>
    );
  }
}

class EventShort extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  componentWillMount() {
    //const newLink = `/events/${this.props.title.toLowerCase()}`;
    //this.setState({currentLink: newLink});
  }

  changeStatus() {
  //  const newLink = !this.state.open ? "/events" : `/events/${this.props.title.toLowerCase()}`;
  //  this.setState({open: !this.state.open, currentLink: newLink});
    this.setState({open: !this.state.open});
  }

  render() {
    return(
      <Col md={8} mdOffset={2} >

        <Panel className={"eventPanel " + (this.state.open ? "eventPanelActive" : "eventPanelInactive")}>
          <div onClick={ ()=> {this.changeStatus()} } >
            <EventHeader date={this.props.date} title={this.props.title} status={this.state.open} />
          </div>
          <Collapse in={this.state.open}>
            {/* collapse animation does not work if target isn't a div.*/}
            <div className="eventBody">
              <EventBody location={this.props.location} description={this.props.description}
                organizer={this.props.organizer} title={this.props.title}
              />
            </div>
          </Collapse>
        </Panel>


      </Col>
    );
  }
}

class EventsIndex extends React.Component {

  constructor({test}){

    super();
    this.state = {
      events: events.events,
      pastEvents: events.pastevents
    };
  }

  render() {
    return (
    <div id='main-content'>
      <Row>
        <Col mdOffset={2} >
          <h3>Upcoming Events</h3>
        </Col>
      </Row>
      <Row>
        {this.state.events.map(
          (event, i)=>{
          return <EventShort isUpcoming={true} key={i} date={event.date}
              location={event.location} title={event.title} description={event.description}
              image={event.image} organizer={event.organizer}/>
          }
        )}
      </Row>
      <Row>
        <Col mdOffset={2} >
          <h3>Past Events</h3>
        </Col>
      </Row>
      <Row>
        <Col>
        {this.state.pastEvents.map(
          (event, i)=>{
          return <EventShort isUpcoming={false} key={i} date={event.date}
              location={event.location} title={event.title} description={event.description}
              image={event.image} shortdescription={event.shortdescription}
              organizer={event.organizer}/>
          }
        )}
        </Col>
      </Row>
    </div>
    );
  }
}

export default class Events extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path={this.props.match.path + "/:title"} component={Event} />
        <Route exact path="/events" component={EventsIndex} />
      <EventsIndex />
      </Switch>
    );
  }

}
