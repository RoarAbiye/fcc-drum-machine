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

 eventHandler () {
    document.addEventListener('keydown',(event) => {
        const id      =   event.key.toUpperCase();
        const audio   =   document.getElementById(event.key.toUpperCase());
        if(document.getElementById(id)) {
             audio.currentTime=0;
             audio.play();
        }
    })
  }

  componentDidMount (){
      this.eventHandler();
   }
  render (){
    return (
      <div id="drum-machine">
        <div className="header">
        <h1>DRUM MACHINE</h1>
        </div>
        <ReactFCCtest />
        <div  className="display">
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
}

class Box extends React.Component {

 playClip () {
     const id        =   this.props.audioProp.keyTrigger;
     const audio     =   document.getElementById(id);
     audio.currentTime=0;
     audio.play();
 }
   render (){
       return (
           <div>
              <button className="drum-pad box" id={this.props.audioProp.id} onClick={this.playClip.bind(this)}>
                   {this.props.audioProp.keyTrigger}
                   <audio className='clip' id={this.props.audioProp.keyTrigger} src={this.props.audioProp.url} />
              </button>
           </div>
       )
   };
    
}

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state={text:""}
    }

 // displayUpdater () {
 //     console.log(document.querySelectorAll('audio'));
 //     // let audio = document.querySelectorAll('audio');
 //     // let a = audio.map((e,i)=>{
 //     //    return {e[i].id, e[i].playing}
 //     // })
 //     // audio.addEventListener('playing', (event) => {
 //     // // console.log(event.target.id);
 //    // console.log(a)
 //     // })
 // }
 //  componentDidMount (){
 //      this.displayUpdater();
 //   }
    render() {
        return(<div id="display"> <h3>Clip: {this.state.text}</h3> </div>)
    }
}

export default App;
