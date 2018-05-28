import React, { Component } from 'react';
import Play from './Play';
import Playing from './Playing';
import Record from './Record';
import Recording from './Recording';
import ReverseThisBlob from './ReverseThisBlob';

class Recorderator extends Component {

    constructor(props){
      super(props);
      this.state = {
        record: false,
        blobURL: null,
        isRecording: false,
        recordingState: null,
      }
    }

    componentDidMount() {
        this.setState({recordingState:"ready"})
    }

    startRecording= () => {
      this.setState({
        record: true,
        isRecording: true
      });
    }
  
    stopRecording= () => {
      this.setState({
        record: false,
        isRecording: false
      });
    }
  
    onStart=() => {
      console.log('You can tap into the onStart callback');
      setTimeout(() => {
        console.log('stop time baby')
        this.stopRecording();
        this.setRecordingState("recorded");
      }, 3000);
    }
  
    onStop = (blobObject) => {
      console.log('stopped');
      console.log('behold, the blob object:');
      console.log(blobObject);
      ReverseThisBlob(blobObject).then((blobObj)=>{
        console.log(blobObj);
        this.setState({
          blobURL : blobObj.blobURL
        })
      });
    }

    setRecordingState = (which) => {
        this.setState({recordingState:which});
    }

    handleRecordingState = () => {
        let rtnVar;
        switch(this.state.recordingState){
        case "ready":
            rtnVar = <Record
                        handleRecord={this.setRecordingState}
                    />;
            break;
        case "recording":
            rtnVar =<Recording
                            startRecording={this.startRecording}
                            audioBitsPerSecond= {128000}
                            onStart={this.onStart}
                            onStop={this.onStop}
                            record={this.state.record}
                        />;
            break;
        case "recorded":
            rtnVar = <Play
                    blobURL={this.state.blobURL}
                    handlePlay={this.setRecordingState}
                    />;
            break;
        case "playing":
            rtnVar = <Playing
                    handlePlaying={this.setRecordingState} 
                    />;
            break;
        default:
            rtnVar = <h2>Unknown recordingState</h2>;
        }
        return rtnVar;
    }
    render(){
        return <div> {this.handleRecordingState()} </div>;
    }
};

export default Recorderator;