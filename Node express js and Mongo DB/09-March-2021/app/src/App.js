import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
// import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    //CORS  Cross origin resource sharing

    axios
      .get("https://bmj-nodejs.herokuapp.com/todos")
      .then((res) => {
        if (res.data.data) {
          setTodo(res.data.data);
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onInputChange = (e) => {
    setItem(e.target.value);
  };

  const onCompleteTodo = (todo) => {
    const body = {
      ...todo,
      isComplete: !todo.isComplete
    }
    axios
      .put("https://bmj-nodejs.herokuapp.com/todo/" + todo._id, body)
      .then((response) => {
        const index = todos.findIndex((_todo) => _todo._id === todo._id );
        if(index > -1) {
          const newTodos = [...todos];
          newTodos.splice(index, 1, response.data.data)
          setTodo(newTodos);

        }
      })
      .catch(() => {
        alert("Failed to add todo");
      });
  }
  const addNewItem = () => {
    const body = {
      text: item,
    };

    axios
      .post("https://bmj-nodejs.herokuapp.com/todo", body)
      .then((response) => {
        const newTodos = [...todos, response.data.data];
        setTodo(newTodos);
      })
      .catch(() => {
        alert("Failed to add todo");
      });

    console.log(item);
  };
  return (
    <div className="App">
      <input type="text" value={item} onChange={onInputChange} />
      <button onClick={addNewItem}>Add Item</button>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo._id}>
              {todo.text} {moment.utc(todo.createdAt).local().format("dddd, MMMM Do YYYY, h:mm:ss a")} <input checked={todo.isComplete} type="checkbox" onChange={() => onCompleteTodo(todo)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
