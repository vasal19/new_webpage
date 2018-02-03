import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/events.css';
import './style/main.css';
import events from "./data/myevents.js";
import {Row, Col, Panel, Collapse} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

class LabeledIcon extends React.Component {
  render() {
    return(
      <div>
        <FontAwesome name={this.props.icon}  rotate={this.props.rotate ? this.props.rotate : 0}/>
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
    return(
      <div className="eventDate">
	     <Row> {number} </Row>
       <Row> {month}  </Row>
      </div>
    );
  }
}

class EventHeader extends React.Component {
  render() {
    return(
      <Row className="eventHeader">
        <Col md={2} xs={3}> <EventDate date={this.props.date}/> </Col>
        <Col md={10} xs={9}> <div className="eventTitle">{this.props.title}</div> </Col>
      </Row>
    );
  }

}

class EventBody extends React.Component {
  render() {
    return (
      <Row>
        <Row className="eventNameInfo">
          <Col md={5} xs={5} mdOffset={1} xsOffset={1}> <LabeledIcon icon="times" label="12:12"/> </Col>
          <Col md={5} xs={5} mdOffset={1} xsOffset={1}> <LabeledIcon icon="location-arrow" label={this.props.location}/> </Col>
        </Row>
        <Row className="eventNameInfo">
          <Col md={5} xs={5} mdOffset={1} xsOffset={1}> <LabeledIcon icon="users" label={this.props.organizer}/> </Col>
          <Col md={5} xs={5} mdOffset={1} xsOffset={1}> <LabeledIcon icon="link" label="More info" rotate={90}/> </Col>
        </Row>
        <Row>
          <Col md={10} xs={10} mdOffset={1} xsOffset={1}>
            {this.props.description}
          </Col>
        </Row>
      </Row>
    );
  }
}

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  render() {
    return(
      <Col md={8} mdOffset={2} >
      <div onClick={ ()=> {this.setState({open: !this.state.open})} } >
        <Panel className="eventPanel">
            <EventHeader date={this.props.date} title={this.props.title} />
          <Collapse in={this.state.open}>
            {/* collapse animation does not work if target isn't a div.*/}
            <div>
              <EventBody location={this.props.location} description={this.props.description}
                organizer={this.props.organizer}
              />
            </div>
          </Collapse>
        </Panel>
        </div>
      </Col>
    );
  }
}

export default class Events extends React.Component {

      constructor(){
    		super();
    		this.state = {
    			events: events.events,
    			pastevents: events.pastevents
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
        			return <Event isUpcoming={true} key={i} date={event.startdate}
        					location={event.location} title={event.name} description={event.description}
                  image={event.image} shortdescription={event.shortdescription}
                  organizer={event.organizer}/>
        		  }
        		)}
          </Row>
          <Row>
            <Col mdOffset={2} >
              <h3>Past Events</h3>
            </Col>
          </Row>
          <Row>
        	  {this.state.pastevents.map(
        			(event, i)=>{
        			return <Event isUpcoming={false} key={i} date={event.startdate}
        					location={event.location} title={event.name} description={event.description}
                  image={event.image} shortdescription={event.shortdescription}
                  organizer={event.organizer}/>
        		  }
        		)}
          </Row>
    	</div>
    );
  }
}
