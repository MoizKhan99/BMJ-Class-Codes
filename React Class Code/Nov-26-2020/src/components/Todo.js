import React from 'react';

class Todo extends React.Component {

    constructor() {
        super();

        this.state = {
            item: '',
            todos: []
        }
    }

    onInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            item: value
        })
        console.log(value)
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <p>{this.state.item}</p>
                <input type="text" placeholder="Enter new item" onChange={this.onInputChange} />
                <button onClick={this.addItem}>Add Item</button>
                {this.state.todos}
            </div>
        )
    }

    addItem = () => {

        const newTodos = this.state.todos.slice(0)
        newTodos.push(this.state.item)

        this.setState({
            todos: newTodos
        })
        console.log('Add Click', newTodos)
    }

}

export default Todo;

