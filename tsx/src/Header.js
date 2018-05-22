import React, { Component } from 'react';
import logo from './assets/logo.png';
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
   
  }

  render() {

    return (
      <div>
        <header>
          <img src={logo} width="200" />
          <a class="mobile-nav-icon" href="#">&#9776;</a>
        </header>
      </div>
    );
  }
}

export default Header;
