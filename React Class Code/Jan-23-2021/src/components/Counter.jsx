import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import { COUNTER_ADD, onIncrement } from "../store/actionType";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles({
    root: {
        backgroundColor: "blue"
    },
    text: {
        color: "red"
    }
})


// import '../App.css';
const Counter = (props) => {
    const classes = useStyle()
    console.log(classes)
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    }; console.log("props", props)

    return (
        <div>
            <h1>Counter App</h1>

            <p>Count: {props.count}</p>

            <Button
                className={[classes.root, classes.text].join(" ")}
                // className={`${classes.root} ${classes.text}`}
                // className={classes.root + " " + classes.text}
                size="small"
                disableRipple={true} onClick={props.increment} variant="contained" color="secondary">ADD</Button>
            <div id='checkboxID'>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
            <TextField
                id="outlined-number"
                label="Number"
                type="tel"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
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
        increment: () => { dispatch(onIncrement()) }
    }
}

const myConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default myConnect(Counter);