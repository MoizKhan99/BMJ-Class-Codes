import { useState } from "react"
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
const Todo = () => {
    const [todos, setTodo] = useState([])
    const [todoItem, setTodoItem] = useState('')

    const onAddItem = () => {
        const newTodos = [...todos]
        newTodos.push(todoItem)
        setTodo(newTodos)
        setTodoItem("")
    }
    return (
        <div>
            <h1>Todo App</h1>
            <h3>Your are adding New Item "{ todoItem }"</h3>
            <TodoForm onAddItem={onAddItem}
                todoItem={todoItem}
                setTodoItem={setTodoItem} />
            <TodoList todos={todos} />

        </div>
    )
}

export default Todo;