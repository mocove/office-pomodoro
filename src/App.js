import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 600 }
    this.myInterval = null;
    this.countDown = this.countDown.bind(this);
  }

  

  countDown() {
    console.log(this.state.counter);
    this.setState({
      counter: this.state.counter - 1
    });
  }

  componentDidMount() {
    this.myInterval = setInterval(this.countDown, 1000);
  }
  
  

  render() {
    return (
      <div className="App">
        <h1>{ this.state.counter }</h1>
      </div>
    );
  }
}

export default App;
