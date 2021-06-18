import { connect } from "react-redux";
import { COUNTER_MINUS, onIncrement } from "../store/actionType";

const DoubleCounter = (props) => {

    return (
        <div>
            <h1>Double Counter App</h1>

            <p>Count: {props.count * 2}</p>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.doubleIncrement}>Double Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )
}

function myState(state) {
    console.log(state)
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => { dispatch(onIncrement()) },
        doubleIncrement: () => { dispatch(onIncrement(2)) },
        decrement: () => {
            dispatch({
                type: COUNTER_MINUS
            })
        }
    }
}

const myConnect = connect(myState, mapDispatchToProps);

export default myConnect(DoubleCounter);