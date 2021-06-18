import { connect } from "react-redux";
import { COUNTER_ADD, onIncrement } from "../store/actionType";

const Counter = (props) => {
    console.log("props", props)
    return (
        <div>
            <h1>Counter App</h1>

            <p>Count: {props.count}</p>

            <button onClick={props.increment}>ADD</button>
        </div>
    )
}

function mapReduxStateToProps(state) {
    console.log(state)
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       increment: () =>  { dispatch(onIncrement()) }
    }
}

const myConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default myConnect(Counter);