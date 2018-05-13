import React, { Component }  from 'react';
import playblink from '../buttons/play-blink.svg';


export default class Playing extends Component {
    render() {
        return (
            <img onClick={() => this.props.handlePlaying("ready")} src={playblink} alt='playing' />
        );
    };
};