import './App.css';
import { useState, useEffect } from 'react';
import Counter from './Counter';
import { useTodo } from './hooks/useTodo';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import CountDownTimer from './components/CountDownTimer'

function App() {
  const [myName, setMyName] = useState('');
  const [todo, { addTodo, deleteTodo }] = useTodo([])
  const [showCounterApp, toggleCounterApp] = useState(true);
  const changeTitle = useDocumentTitle("Todo App");
  useEffect(() => {
    changeTitle(`Todo App - item ${todo.length}`)
   }, [todo])
  const onAddItem = () => {
    addTodo(myName)
  }
  const onInputChange = (event) => {
    setMyName(event.target.value)
  }

  const toggleApp = () => {
    toggleCounterApp(!showCounterApp)
  }

  const onDelete = (index) => {
    deleteTodo(index);
  }
  return (
    <div>
      <CountDownTimer />
      <input onChange={onInputChange} />
      <button onClick={onAddItem}>Add Item</button>
      {/* <h3>{myName}</h3>
      <input onChange={onInputChange} />
      <hr />
      {showCounterApp ? <Counter /> : null}
      <button onClick={toggleApp}>Show/Hide Counter</button> */}
      {todo.map((item, index) => <p key={index}>{item} <span onClick={() => onDelete(index)}>X</span></p>)}
    
    </div>
  );
}
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0
//     }
//   }

//   updateCounter = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Counter App</h1>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.updateCounter}>Update counter</button>
//       </div>
//     );
//   }
// }
export default App;
