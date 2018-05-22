import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  constructor( props ){
    super( props );
  
    this.state = { 

    }
  }
  componentDidMount = () => {
      
  }
  headerName = () => {
    return 'Header From Function'
  }

  render() {
    const
      varx = '55';
    return (
      <div>
        <h1>{this.headerName()}</h1>
        <p>{varx}</p>
      </div>
    );
  }
}

export default Header;
