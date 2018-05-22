import React, { Component } from 'react';
/*import { Switch, Route } from 'react-router-dom';*/
/*import Welcome from './Welcome';
import MyStore from './MyStore';
import Analytics from './Analytics';*/
import './css/Nav.css';

class Header extends Component {
  constructor( props ){
    super( props );
  
    this.state = { 
      navPosition: false
    }
  }
  componentDidMount = () => {
      
  }
  toggleNav = () => {
    this.setState(prevState => ({
      navPosition: !prevState.navPosition
    }));
  }

  render() {

    return (
      <div>
        <a onClick={this.toggleNav} class="mobile-nav-icon" href="#">&#9776;</a>
        {this.state.navPosition &&
          <div className="nav-wrap">
              <ul>
                <a href="/"><li>Welcome</li></a>
                <a href="/mystore"><li>My Store</li></a>
                <a href="/analytics"><li>Analytics</li></a>
              </ul>  
          </div>
        }
      </div>
    );
  }
}

export default Header;
