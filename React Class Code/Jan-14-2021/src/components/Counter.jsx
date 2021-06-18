import { connect } from "react-redux";

const Counter = (props) => {
    const onIncrement = () => { }
    console.log("props", props)
    return (
        <div>
            <h1>Counter App</h1>

            <p>Count: {props.count}</p>

            <button onClick={onIncrement}>ADD</button>
        </div>
    )
}

function myState(state) {
   return {
      count:  state.count
   }
}

const myConnect = connect(myState);

export default myConnect(Counter);