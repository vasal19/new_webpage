import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class FormUnit extends React.Component {
  render() {
    return(
      <div>
        <label> {this.props.name} </label> <br/>
        <input type={this.props.type} id={this.props.id}/>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return(
      <div>
        <FormUnit name="name" type="text" id="userName" />
        <FormUnit name="email" type="text" id="userEmail" />
        <label> Message </label> <br/>
        <textarea id="userMessage"></textarea>
      </div>
    );
  }
}

class ContactPanel extends React.Component {

  render() {
    return(
      <Form />
    );
  }
}

export default function printContact() {
  return (<ContactPanel />);
}
