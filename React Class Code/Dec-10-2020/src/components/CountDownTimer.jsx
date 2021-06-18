import useCountDown from 'react-countdown-hook';
import { useEffect } from 'react';

const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

const CountDownTimer = () => {

    const [timeLeft, { start }] = useCountDown(initialTime, interval)
    useEffect(() => {
        start();
    }, []);
    return (
        <div>
            <h1>Count Down Timer</h1>
            <h3>Time: {timeLeft / 1000}</h3>
        </div>
    )
}

export default CountDownTimer;