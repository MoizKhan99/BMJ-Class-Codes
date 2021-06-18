import { useState } from "react"
const TodoForm = ({ onAddItem, todoItem, setTodoItem }) => {
    return (
        <div>
            <input value={todoItem} onChange={(event) => setTodoItem(event.target.value)} />
            <button onClick={onAddItem}>Add Item</button>
        </div>
    )
}

export default TodoForm;
