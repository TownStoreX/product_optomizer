import React, { Component } from 'react';
import './css/Welcome.css';
import logo from './assets/Asset3.png';

import storeLogo from './assets/Asset5.png';
import productsLogo from './assets/Asset6.png';
import anaLogo from './assets/Asset7.png';

class Welcome extends Component {
  constructor( props ){
    super( props );
  
    this.state = { 

    }
  }
  componentDidMount = () => {
      
  }

  render() {
    return (
      <div className="welcome">
      
        <div className="logo-container">
        
          <img src={logo} alt="Logo"/>
        
        </div>

        <div className="logo-desc">

          Craft the ultimate customer experience 
          backed by state of the art data technology

        </div>

        <div className="welcome-nav-container">
        
          <ul className="welcome-nav">

            <li>
              <div className="nav-item">
                <a href="#">
                  <div className="nav-item-logo">
                    <img src={storeLogo} alt=""/>
                  </div>
                  <div className="nav-item-desc">
                    My Store
                  </div>
                </a>
              </div>
            </li>

            <li>
              <div className="nav-item">
                <a href="#">
                  <div className="nav-item-logo">
                    <img src={productsLogo} alt=""/>
                  </div>
                  <div className="nav-item-desc">
                    Products
                  </div>
                </a>
              </div>
            </li>
            
            <li>
              <div className="nav-item">
                <a href="#">
                  <div className="nav-item-logo">
                    <img src={anaLogo} alt=""/>
                  </div>
                  <div className="nav-item-desc">
                    Analystics
                  </div>
                </a>
              </div>
            </li>

          </ul>

        </div>
      
      </div>
    );
  }
}

export default Welcome;
