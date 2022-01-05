import ReactFCCtest from 'react-fcctest';
import React from 'react';
import './App.css';

const AUDIOCLIPS = [
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
              <Box/>
        <div className="footer">
        <p>Created for FreeCodeCamp Front End Library Certification</p>
        </div>
      </div>
    
    ) 
  };
}

class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = { currentClip:"😴" }
    }
   clickHandler = (audioId) => {
      const audio     =   document.getElementById(audioId.keyTrigger);
      this.setState({currentClip: audioId.id})
      audio.play();
 }

 eventHandler () {
    document.addEventListener('keydown',(event) => {
        const id      =   event.key.toUpperCase();
        if(document.getElementById(id)) {
            switch(id){
                case 'Q':
                    this.clickHandler(AUDIOCLIPS[0]);
                    break;
                case 'W':
                    this.clickHandler(AUDIOCLIPS[1]);
                    break;
                case 'E':
                    this.clickHandler(AUDIOCLIPS[2]);
                    break;
                case 'A':
                    this.clickHandler(AUDIOCLIPS[3]);
                    break;
                case 'S':
                    this.clickHandler(AUDIOCLIPS[4]);
                    break;
                case 'D':
                    this.clickHandler(AUDIOCLIPS[5]);
                    break;
                case 'Z':
                    this.clickHandler(AUDIOCLIPS[6]);
                    break;
                case 'X':
                    this.clickHandler(AUDIOCLIPS[7]);
                    break;
                case 'C':
                    this.clickHandler(AUDIOCLIPS[8]);
                    break;
                default:
                    return null;

            }
        }
    })
  }

  componentDidMount (){
      this.eventHandler();
  }

   render (){
       return (
           <div>
           <div className="display pad-container">
        {AUDIOCLIPS.map((audioClip) => {
            return(
              <button className={`drum-pad box ${audioClip.keyTrigger}`} id={audioClip.id} 
                onClick={() => {this.clickHandler(audioClip)}}>
                {audioClip.keyTrigger}
                <audio className='clip' id={audioClip.keyTrigger} src={audioClip.url} />
                </button>
                )
            }
        )}
           </div>
           <div id="display" className="currentClip">
            {this.state.currentClip}
           </div>
           </div>
       );
    
    }
}

export default App;
