import { createContext, useContext, useState } from "react"

export const UserContext = createContext(null)

export const useUser = () => useContext(UserContext)


export const UserProvider = ({ children }) => {
    const [todos, setTodos] = useState([])

    const addItem = () => {
        const newTodos = [...todos];
        newTodos.push("item " + (todos.length + 1))
        setTodos(newTodos)
    }

    const getUser = () => {}
    return (
        <UserContext.Provider value={{
            todos: todos,
            addItem: addItem
        }}>
            {children}
        </UserContext.Provider>
    )
}
console.log(UserContext)