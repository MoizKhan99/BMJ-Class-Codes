import logo from './logo.svg';
import './App.css';
import React from 'react';
import Timer from './Timer';
import GithubUser from './ImageGallery';
import Counter from './Counter';
import useCounter from './hooks/Counter';
import useTitle from './hooks/useTitle';
import useWindowSize from './hooks/useWindowSize';

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
  const [showCounter, setShowCounter] = React.useState(false);

  const [userName, setUserName] = React.useState('');
  const [githubUserName, setGithubUserName] = React.useState('');
  const [startFetching, setStartFetching] = React.useState(false);
  const [count, setCount] = useCounter(100)
  const changeTitle = useTitle()
  const size = useWindowSize()
  changeTitle('Counter App ' + count)
  const toggleCounter = () => {
    setShowCounter(!showCounter)
  }
  const onUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const onStartFetching = () => {
    setGithubUserName(userName)
    setStartFetching(true)
  }
  React.useEffect(() => {
    console.log("App component updated")
  }, [])
  return (
    <div>
      <h1>Window Size: {size}</h1>
      <h1>Count: {count}</h1>
      <button onClick={setCount}>Update Counter</button>
      <input onChange={onUserNameChange} />
      <button onClick={ onStartFetching} >Get User</button>
      {/* {showCounter ? <Counter count={1000}/> : null}
      <button onClick={toggleCounter}>Toggle Counter</button> */}

      {startFetching ? <GithubUser userName={githubUserName} /> : null}
    </div>
  )
}


export default App;
