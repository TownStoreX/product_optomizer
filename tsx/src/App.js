import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Child from './Child';
import Header from './Header';


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
        <Child onClickFunction={this.sampleFunction} welcome={this.state.message} message2={this.state.message2} />
      </div>
    );
  }

}

export default App;
