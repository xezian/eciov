import React, { Component }  from 'react';
import play from '../../buttons/play.svg';

export default class Play extends Component {
    componentDidMount() {
        this.props.directions(['you can now hear', 'what you just recorded','backwards!']);
    }
    handlePlayClick = () => {
        this.props.handlePlay("playing");
    }
    render() {
        if(this.props.revBuff){
            return (
                <div>
                    <img onClick={this.handlePlayClick} src={play} alt='play' />
                    <br/>
                    PLAY ^ BUTTON
                </div>
            );
        } else {
            return <div>reversing</div>;
        }
    };
};