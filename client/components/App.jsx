import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      name: 'Guest',
      phase: 'color',
      searching: false,
    };
    this.handleColor = this.handleColor.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.test = this.test.bind(this);
  }

  handleColor(e) {
    e.preventDefault();
    let color = e.target.value;
    let phase = 'name';
    this.setState({ color, phase });
  }

  handleContinue(e) {
    e.preventDefault();
    let nameSelector = document.getElementById('name-selector');
    let name = nameSelector.options[nameSelector.selectedIndex].value;
    let searching = true;
    let phase = 'connect';
    this.setState({ name, phase, searching });
    axios.post('/ready', {
      color: this.state.color,
      name: this.state.name,
      searching: this.state.searching,
    });
    this.handleSearching();
  }

  handleSearching() {
    axios.post('/search', {
      color: this.state.color,
      name: this.state.name,
      searching: this.state.searching,
    })
    .then(response => {
      if (response.data === false) {
        setTimeout(() => {this.handleSearch()}, 1000);
      }
      else (console.log(response.data));
    })
  }

  test() {
    console.log(this.state);
  }

  render() {
    if (this.state.phase === 'color') {
      return (
        <div id="app-container">
          <h1 id="title">Welcome</h1>
          <div>
            <h2>Pick your color:</h2>
            <button value="blue" onClick={this.handleColor}>Blue</button>
            <button value="red" onClick={this.handleColor}>Red</button>
          </div>
        </div>
      );
    }
    if (this.state.phase === 'name') {
      return (
        <div id="app-container">
          <div>
            <h1>Choose a name:</h1>
            <form>
              <select id="name-selector">
                <option value="Slayer">Slayer</option>
                <option value="Crusher">Crusher</option>
                <option value="Destroyer">Destroyer</option>
                <option value="Never Lose">Never Lose</option>
                <option value="Unkillable God">Unkillable God</option>
              </select>
              <button onClick={this.handleContinue}>Ready!</button>
            </form>
          </div>
        </div>
      );
    }
    if (this.state.phase === 'connect') {
      return (
        <div id="app-container">
          <h1 id="title">Searching for opponent...</h1>
          <div>
            <button onClick={this.test}>test</button>
          </div>
        </div>
      );
    }
    if (this.state.phase === 'playing') {
      return (
        <div id="app-container">
          <h1 id="title">RED vs BLUE</h1>
          <div>
            <button onClick={this.test}>test</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
