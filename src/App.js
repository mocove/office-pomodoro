import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 600,
      isRunning: false,
      txtHeadline: 'Do Not Disturb',
      txtLeadUp: 'I will be available in',
      txtEnding: 'Thank you.'
    }
    
    this.myInterval = null;
    
    this.tick = this.tick.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.toggleIsRunning = this.toggleIsRunning.bind(this);
  }

  

  tick() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  startCountDown() {
    if (!this.state.isRunning) {
      this.myInterval = setInterval(this.tick, 1000);
      this.setState({ isRunning: true });
    }
  }

  stopCountDown() {
    clearInterval(this.myInterval);
    this.setState({ isRunning: false });
  }

  toggleIsRunning() {
    const newState = this.state.isRunning ? 'false' : 'true';
    this.setState({ isRunning : newState });
    console.log(this.state.isRunning);
  }

  componentDidMount() {
    
  }
  
  

  render() {
    let bgClass = 'stopped';
    if (this.state.isRunning) {
      bgClass = 'running';
    }
    let className = 'App ' + bgClass
    return (
      <div className={className}>
        <br /><br /><h1>Open Office Pomodoro Timer</h1>
        <p>{ this.state.txtHeadline }</p>
        <p>{ this.state.txtLeadUp } { this.state.counter } seconds.</p>
        <p>{ this.state.txtEnding }</p>
        <button onClick={ this.startCountDown }>Start CountDown</button>
        <button onClick={ this.stopCountDown }>Stop CountDown</button>
        <br />
        <p>Running: { this.state.isRunning ? 'True' : 'False' }</p>
      </div>
    );
  }
}

export default App;
