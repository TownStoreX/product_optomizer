import React, { Component } from 'react';
import './Child.css';

class Child extends Component {
  constructor( props ){
    super( props );
  
    this.state = { 

    }
  }
  componentDidMount = () => {
      
  }
  render() {
    return (
      <div>
        <p>Child Component</p>
        <p>{this.props.welcome}</p>
        <p>{this.props.message2}</p>

      </div>
    );
  }
}

export default Child;
