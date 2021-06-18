import { useState } from 'react';

export function useTodo(todo) {
    const [_todo, setTodo] = useState(todo)

    const addTodo = (item) => {
        const newTodo = [..._todo];
        newTodo.push(item);

        setTodo(newTodo);
    }

    const deleteTodo = (index) => {
        const newTodo = [..._todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
    }
    return [_todo, {
        addTodo: addTodo, 
        deleteTodo: deleteTodo
    }]
}