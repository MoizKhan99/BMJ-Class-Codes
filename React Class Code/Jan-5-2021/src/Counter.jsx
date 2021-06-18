import { useState, useEffect } from 'react';
import { useWidth } from './hooks/useWidth';

function Counter() {
    const [count, updateCounter] = useState(0)
    const width = useWidth()

    console.log(width)
    useEffect(function () {
        // console.log('useEffect count')
    }, [count]) // componentDidUpdate

    useEffect(function () {
        // console.log('useEffect all updates')
    }) // componentDidUpdate

    useEffect(() => {
        console.log("componentDidMount with useEffect")

        // let interval = setInterval(() => {
        //     updateCounter((prevCount) => {
        //         console.log(prevCount, 'prevCount');
        //         return prevCount + 1
        //     })
        // }, 1000)

        return () => {
            // console.log("Component will unmount with useEffect")
            // clearInterval(interval)
        }
    }, []) // with empty array useEffect will work as componentDidMount
    // console.log(myState)
    return (
        <div>
            <h1>Counter App</h1>
            <h1>Window Size: {width}</h1>
            <p>Count: {count}</p>
            <button onClick={() => updateCounter(count + 1)}>Update counter</button>
        </div>
    );
}

export default Counter;
