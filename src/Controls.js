import React from 'react';

export class Controls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRunning: false,
        }
    }

    render() {
        return(
            <div id="controls">
                {!this.props.state && <button onClick= { this.props.settingsClickHandler }>Settings</button> }
                <button onClick={ this.props.playStopClickHandler }>{ this.props.state ? 'Stop' : 'Play' }</button>
            </div>
        );
    }

}

export default Controls;