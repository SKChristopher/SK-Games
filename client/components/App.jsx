import React, { Component } from 'react';

import './../styles/styles.scss';

export class App extends Component {
    constructor(props) {
        super(props);
        };

    render() {
        return (
            <div id="app-container">
                <div id="title"> Canyon Crest Construction </div>
            </div>
        )
    }
}

export default App;