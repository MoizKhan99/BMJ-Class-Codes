import { useUser } from "./contexts/UserProvider"

const Child1 = () => {
    const { todos } = useUser()
    return <div>
        <h1>Child 1</h1>
        {todos.map((item, index) => <p key={index}>{item}</p>)}
    </div>
}

const Child2 = () => {
    const { addItem } = useUser()
    return <div>
        <h1>Child 2</h1>
        <button onClick={addItem}>Add Item</button>
    </div>
}
const App2 = () => {
    const data = useUser()
    console.log(data)
    const Func = () => {

    }
    return (
        <div>
            <h1>App 2</h1>
            <Child1 />
            <Child2 />
        </div>
    )
}

export default App2;