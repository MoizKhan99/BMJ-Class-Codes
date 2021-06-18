import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { COUNTER_ADD, onIncrement } from "../store/actionType";

const Counter = (props) => {
    console.log("props", props)
    return (
        <div>
            <h1>Counter App</h1>

            <p>Count: {props.count}</p>

            <Button size="small" 
            disableRipple={true} onClick={props.increment} variant="contained" color="secondary">ADD</Button>
        </div>
    )
}

function mapReduxStateToProps(state) {
    console.log(state)
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       increment: () =>  { dispatch(onIncrement()) }
    }
}

const myConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default myConnect(Counter);