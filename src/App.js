import ReactFCCtest from 'react-fcctest';
import React from 'react';
import './App.css';


const audioClips = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];
class App extends React.Component {
    
  render (){
    return (
      <div id="drum-machine">
        <div className="header">
        <h1>DRUM MACHINE</h1>
        </div>
        <ReactFCCtest />
        <div id="display" className="display">
        {audioClips.map((audioClip, i) => {
            return (
                <Box audioProp={audioClip} indexProp={i}/>
            );
           } 
        )}
        </div>
        <div className="footer">
        <p>Created for FreeCodeCamp Front End Library Certification</p>
        </div>
      </div>
    
    ) 
  };
    componentDidMount (){
        document.addEventListener('keydown',(event) => {
            if(document.getElementById(event.key.toUpperCase())){
                document.getElementById(event.key.toUpperCase()).play();
                document.getElementById(event.key.toUpperCase()).currentTime=0;
         }
        })
    }
}


class Box extends React.Component {
    playClip () {
        document.getElementById(this.props.audioProp.keyTrigger).play();
        document.getElementById(this.props.audioProp.keyTrigger).currentTime=0;
        
    }
    render (){
        return (
            <div>
               <button className="drum-pad box" id={this.props.audioProp.id} onClick={this.playClip.bind(this)}>
                    {this.props.audioProp.keyTrigger}
                    <audio className="clip" id={this.props.audioProp.keyTrigger} src={this.props.audioProp.url} />
               </button>
            </div>
        )
    };
    
}

export default App;
