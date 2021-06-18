import React from 'react';

// class Counter extends React.Component {

//     constructor() {
//         super();

//         this.state = {
//             count: 0
//         }
//     }
//     updateCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Counter App</h1>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.updateCount}>Update counter</button>
//             </div>
//         )
//     }
// }

function Counter(props) {
    let [count, setCounter] = React.useState(props.count) // hook
    // let count = myCounter[0];
    // const setCounter = myCounter[1]
    const updateCount = () => {
        function sqaure(count) {
            return count * count
        }
        setCounter(count + 1)
    }
    return (
        <div>
            <h1>Counter App</h1>
            <p>{count}</p>
            <button onClick={updateCount}>Update counter</button>
        </div>
    )
}
export default Counter;