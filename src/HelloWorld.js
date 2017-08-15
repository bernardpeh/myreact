import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.frenchify = this.frenchify.bind(this);
    this.state = { greeting: 'Hello' };
  }

  frenchify() {
    this.setState({greeting: 'Bonjour'});
  }

  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }
}

/*
const HelloWorld = (props) => {
  return (<div className="HelloWorld">Hello {props.name}!</div>);
}
*/
export default HelloWorld;
