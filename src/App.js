import ReactFCCtest from 'react-fcctest';
import React from 'react';
import './App.css';

const pads = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]

class App extends React.Component {
  render (){
    return (
      <div id="drum-machine">
        <div id="display" className="display">
        {pads.map((keys, idx)=>(
            <Box  text={keys} key={idx} />
        ))}
        </div>
          <Box />
      </div>
     );
   }
}

class Box extends React.Component {
    render (){
        return (
            <div className="box">
            {this.props.text}
            </div>
        )
    };
    
}

      //<ReactFCCtest />
     //<div id="display"></div>
     //{pads.map(i => <a className="drum-pads" id={i} href='"#"+{i}'>{i}</a>)}
     //</div>

export default App;
