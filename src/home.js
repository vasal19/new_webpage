import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends React.Component {
  render() {
    return(
      <center>
        <br/> <br/> <br/>
        <p> This is a Home page! </p>
      </center>
    );
  }
}

export default function printHome() {
  return (<Home />);
}
