import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Controls } from '../src/Controls';
import { Settings } from '../src/Settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 600,
      isRunning: false,
      isSettingsOpen: false,
      txtHeadline: 'Do Not Disturb',
      txtLeadUp: 'I will be available in',
      txtEnding: 'Thank you.'
    }
    
    this.myInterval = null;
    
    this.tick = this.tick.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.toggleIsRunning = this.toggleIsRunning.bind(this);
    this.handleClickPlayStop = this.handleClickPlayStop.bind(this);
    this.handleClickSettings = this.handleClickSettings.bind(this);

    this.handleTxtHeadlineChange = this.handleTxtHeadlineChange.bind(this);
    this.handleTxtLeadupChange = this.handleTxtLeadupChange.bind(this);
    this.handleTxtEndingChange = this.handleTxtEndingChange.bind(this);
  }

  handleClickPlayStop() {
    if(!this.state.isRunning) {
      this.startCountDown()
    } else {
      this.stopCountDown();
    }
  }

  handleClickSettings() {
    if(!this.state.isSettingsOpen) {
      this.setState({ isSettingsOpen: true });
    } else {
      this.setState({ isSettingsOpen: false });
    }
  }

  handleTxtHeadlineChange(e) {
    console.log(e.target.value);
    this.setState({ txtHeadline: e.target.value });
  }
  handleTxtLeadupChange(e) {
    console.log(e.target.value);
    this.setState({ txtLeadUp: e.target.value });
  }
  handleTxtEndingChange(e) {
    console.log(e.target.value);
    this.setState({ txtEnding: e.target.value });
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
        <p>Running: { this.state.isRunning ? 'Stop' : 'Play' }</p>
        <Controls state={ this.state.isRunning } playStopClickHandler={ this.handleClickPlayStop } settingsClickHandler={ this.handleClickSettings } />
        <Settings
          handlers={{
            txtHeadlineHandler: this.handleTxtHeadlineChange,
            txtLeadupHandler: this.handleTxtLeadupChange,
            txtEndingHandler: this.handleTxtEndingChange }} texts={{ bigText: this.state.txtHeadline, smallText: this.state.txtLeadUp, thankYouText: this.state.txtEnding }} show={ this.state.isSettingsOpen } />
      </div>
    );
  }
}

export default App;
