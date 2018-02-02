import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './loraneventscrappy.css';
import events from "./myevents.js";
import mapimg from "./img/location-icon.png";
import {Panel} from 'react-bootstrap';

class EvDate extends React.Component {
  render() {
    return(
	<span className='event-date'>{this.props.imerominia}</span>
    );
  }
}

class EvLocation extends React.Component {
  render() {
    return(
		<span className='event-location'> • {this.props.location}
        <a id='img-location' title='Show on Google Maps!' rel="noopener noreferrer" target="_blank" href={'https://www.google.com/maps?q='+this.props.location}>
		<img src={mapimg} alt="Click Here"></img></a>
		</span>

    );
  }
}



class EvTitle extends React.Component {
  render() {
    return(
	<span className="event-title">{this.props.title}</span>
    );
  }
}

class EvDescription extends React.Component {
  render() {
    return(
	<div className="event-description">{this.props.description}</div>
    );
  }
}

class EvImage extends React.Component{
	render(){
		return(
		<span><br></br><img src={this.props.image} alt="Eikona edo!"></img></span>
		);
		
	}
	
}


class Event extends React.Component {

  render() {
    return(
	<Panel className={this.props.isUpcoming==true?'upcoming-events':'past-events'}>
	    <EvDate imerominia={this.props.imerominia} />
		<EvLocation location={this.props.location} />
		<EvImage src={this.props.image} />
		<EvTitle title={this.props.title} />
	<EvDescription description={this.props.description} />
	</Panel>
	
    );
  }
}



class EventContainer extends React.Component {
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
	  
		<h3>Upcoming Events</h3>
		  {this.state.events.map(
			(event, i)=>{
			return <Event isUpcoming={true} key={i} imerominia={event.startdate} 
					location={event.location} 
					title={event.name} description={event.description} image={event.image} />
		  }
		)}
		
			<h3>Past Events</h3>
		
	  		{this.state.pastevents.map(
			(event, i)=>{
			return <Event isUpcoming={false} key={i} imerominia={event.startdate} 
					location={event.location} 
					title={event.name} description={event.description} src={event.image} />
			}
			)}
	  </div>
    );
  }
}



export default class Events extends React.Component {

  render() {
    return (
      <EventContainer />
    );
  }
}








