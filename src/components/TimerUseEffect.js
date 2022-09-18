import { useState, useEffect } from "react";

const TimerUseEffect = () => {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const timerID = setInterval(() => {
            setCountdown((prevState) => prevState - 1);
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    return <div>{countdown}</div>;
};

export default TimerUseEffect;
