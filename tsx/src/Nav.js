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
      products: 'products'
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
      <div className="nav-wrap">
        <ul>
          <a href="/"><li>Welcome</li></a>
          <a href="/mystore"><li>My Store</li></a>
          <a href="/analytics"><li>Analytics</li></a>
        </ul>
        {/*<Route exact testprop="xyxyxyxyx" path='/' component={Welcome} />
        <Route exact testprop="xyxyxyxyx" path='/mystore' component={MyStore} />
        <Route path="/analytics" render={()=><Analytics products={this.state.products} /> } />*/}
      </div>
    );
  }
}

export default Header;
