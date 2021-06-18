import logo from './logo.svg';
import './App.css';
import React from 'react';
import Timer from './Timer';
import ImageGallery from './ImageGallery';
// life cycle event

// mount - mounted
// update
// unmount
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      showTimer: false
    }
    console.log("constructor")

  }

  toggleTimer = () => {
    this.setState({
      showTimer: !this.state.showTimer
    })
  }
  render() {
    console.log("render - App")
    return (
      <div>
        <ImageGallery />
        {/* {this.state.showTimer ? <Timer /> : <div />}
        <button onClick={this.toggleTimer}>Toggle Timer</button> */}
      </div>
    )
  }
}

export default App;
