import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <div id="app-container">
        <div id="title">Welcome</div>
      </div>
    );
  }
}

export default App;
