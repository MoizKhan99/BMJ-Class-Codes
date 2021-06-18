import logo from './logo.svg';
import './App.css';
import React from 'react';
import Timer from './Timer';
import ImageGallery from './ImageGallery';
import Counter from './Counter';

// life cycle event

// mount - mounted
// update
// unmount
// class App extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       showTimer: false,
//       username:'Arsalan'
//     }
//     console.log("constructor");
//   }

//   toggleTimer = () => {
//     this.setState({
//       showTimer: !this.state.showTimer
//     })
//   }
//   render() {
//     console.log("render - App")
//     return (
//       <div>
//         {/* <ImageGallery /> */}
//         <Timer username={this.state.username}/>
//         {/* {this.state.showTimer ? <Timer /> : <div />}
//         <button onClick={this.toggleTimer}>Toggle Timer</button> */}
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div>
      <Counter count={1000}/>
    </div>
  )
}


export default App;
