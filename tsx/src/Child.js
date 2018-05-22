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
      <div className = "welcome">
        <div className="welcome-desc">
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

export default Child;
