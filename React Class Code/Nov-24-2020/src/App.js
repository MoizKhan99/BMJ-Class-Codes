import logo from './logo.svg';
import './App.css';
import React from 'react';

// class Counter extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       count: 0
//     };

//   }

//   onIncrement = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   onDecrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
    
//   }

//   render() {
//     console.log('render', this.state.count)
//     return (
//       <div>
//         <h1>Counter App</h1>
//         <p>Count: {this.state.count}</p>

//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   render() {
//     return (
//       <Counter></Counter>
//     )
//   }
// }

function Greet(myProps) {
  console.log(myProps)
  return (
    <h1>Hello {myProps.userName}</h1>
  )
}

function App() {
  // props
  return (
    <div>
      <Greet userName="Ali" /> 
      <Greet userName="bmj" />
    </div>
  );
}

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends User {}

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new User('ali', 25)
// const std1 = new Student('ali', 25)









export default App;
// parameters
// function sum(num1, num2) {

// }

// sum(3, 54) // arguments
