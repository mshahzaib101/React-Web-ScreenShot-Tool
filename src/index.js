import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import html2canvas from 'html2canvas';


class App extends Component {
  state = {
    name: 'GAMO',
    screenCapture: ''
  }

  onCapture = () => {
    const body = document.querySelector('body')

    html2canvas(body).then(canvas => {
    
      document.body.appendChild(canvas);
    this.setState({
      screenCapture:canvas.toDataURL()
    })
    console.log('picccc')

    console.log(this.state.screenCapture)
  });

  }

  render() {
    return (
      <div >
       
          
            <Hello name={this.state.name} />
            <img src='data:image/jpeg;base64,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' />
            <p>
              Start editinds
              ds
              d
              s
              ds
              d
              s
              d
              sd
              sdsssssssssss
              
              
              
              g to see some magic happen :)
            </p>
            <button onClick={this.onCapture}>Capture</button>
            <br/>
            <br/>
            <img src={this.state.screenCapture} />
          
      
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
