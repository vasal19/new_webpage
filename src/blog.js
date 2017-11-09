import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Blog extends React.Component {
  render() {
    return(
      <center>
        <br/> <br/> <br/>
        <p> This is a Blog page! </p>
      </center>
    );
  }
}

export default function printBlog() {
  return (<Blog />);
}
