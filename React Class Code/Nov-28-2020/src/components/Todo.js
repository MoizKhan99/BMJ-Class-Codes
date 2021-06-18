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
    }

    checkDisable = () => this.state.item === ''


    render() {
        // var nums = [1,2,3,4,5]
        let list = this.state.todos.map((item, index) => (
            <li key={index}>{item} <button onClick={() => { this.onDelete(index)}}>Delete</button></li>
        ));

        // for (let i = 0; i < nums.length; i++) {
        //     list.push(nums[i] * nums[i])
        // }
        // console.log(list)
        // var squares = nums.map(function(num, index) {
        //     return num * num
        // })
        // console.log("squares", squares)
        // console.log("nums", nums)
        console.log(this.state.todos)
        return (
            <div>
                <h1>Todo App</h1>
                <form onSubmit={this.addItem}>
                    <input id="Val" value={this.state.item} type="text" onChange={this.onInputChange} />
                    <button type="submit" disabled={this.checkDisable()}>Add Item</button>
                </form>
                {/* <button onClick={this.addItem} disabled={this.state.item === ''}>Add Item</button> */}
                <ul>
                    {list}
                </ul>
            </div>
        )
    }   

    onDelete = (index) => {
        let newTodos = [...this.state.todos];
        newTodos.splice(index, 1);

        this.setState({
            todos: newTodos
        })
    }

    addItem = (event) => {
        event.preventDefault()
        const newTodos = this.state.todos.slice(0)
        newTodos.push(this.state.item)

        this.setState({
            todos: newTodos,
            item: ''
        })
    }

}

export default Todo;

