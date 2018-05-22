import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Child from './Child';
import Header from './Header';
import Nav from './Nav';
import Welcome from './Welcome';
import MyStore from './MyStore';
import Analytics from './Analytics';


class App extends Component {

  constructor( props ){
    super( props );
  
    this.state = {
      message:'testing'
    };
  }
  componentDidMount = () => {
    this.setState({showModule: false});
  }
  render() {
    return (
      <div>
        <Header />
        <Nav />
        {/*<Child onClickFunction={this.sampleFunction} welcome={this.state.message} message2={this.state.message2} />*/}
        <Route exact testprop="xyxyxyxyx" path='/' component={Welcome} />
        <Route exact testprop="xyxyxyxyx" path='/mystore' component={MyStore} />
        <Route path="/analytics" render={()=><Analytics products={this.state.products} /> } />
      </div>
    );
  }

}

export default App;
